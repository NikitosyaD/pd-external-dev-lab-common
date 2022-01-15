import React from 'react';
import {Col, Layout, Row, Avatar, Button, message} from "antd";
import LogOut from "../LogOut";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AInput} from "../../common/makefield";
import {auth,} from '../../firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import {usersAPI} from "../../api/api";
import {setIsTeacher} from "../../redux/userReducer";
const {Header, Content, Footer} = Layout;


function ProfileForm(props) {
  // const [user] = useAuthState(auth);
  // let name = user.displayName;
  return (
      <form className="inputs" onSubmit={props.handleSubmit}>
        <label style={{marginBottom: 15, display: "block"}}>
          <span style={{marginBottom: 5, display: "block"}}>Name</span>
          <Field type={"text"} name={"name"} component={AInput} placeholder="Your Name"/>
        </label>
        <label style={{marginBottom: 15, display: "block"}}>
          <span style={{marginBottom: 5, display: "block"}}>Surname</span>
          <Field type={"text"} name={"last_name"} component={AInput} placeholder="Your Surname"/>
        </label>
        {/*<label style={{marginBottom: 15, display: "block"}}>*/}
        {/*  <span style={{marginBottom: 5, display: "block"}}>Phone</span>*/}
        {/*  <Field type={"text"} name={"phone"} component={AInput} placeholder="Your Phone"/>*/}
        {/*</label>*/}
        <Button type="primary" htmlType="submit">Save</Button>
      </form>
  );
}


const ReduxProfileForm = reduxForm({
  form: "Profile",
})(ProfileForm)

const ReduxProfileFormWrap = connect(
    state => ({
      initialValues: {
        name: state.Profile.Profile.name,
        last_name: state.Profile.Profile.last_name,
        // phone: state.Profile.Profile.phone,
      },
    }),
    null
)(ReduxProfileForm);

function Profile(props) {
  const [user] = useAuthState(auth);
  let onSubmit = (formData) => {
    let data = {
      uid: user.uid,
      email: user.email,
      last_name: formData.last_name,
      name: formData.name
    }
    usersAPI.setUser(data);
    props.props.setProfile(formData);
    message.success('Your data was updated!');
  }

    // //// Образец получения нужных данных из коллекции 'users'
    // const [users,setUsers]=useState([])
    // const fetchUsers=async()=>{
    //   const response=projectFirestore.collection('users');
    //   const data=await response.get();
    //   data.docs.forEach(item=>{
    //   setUsers([...users,item.data()])
    //   })
    // }
    // useEffect(() => {
    //   fetchUsers();
    // }, []
    // )
    

  // // Образец использования, удалить после использования
  // return (
  //   <div className="App">
  //     {
  //       users && users.map(user=>{
  //         return(
  //           <div className="blog-container">
  //             <h4>{user.id}</h4>
  //             <h4>{user.name}</h4>
  //             <h4>{user.last_name}</h4>
  //             <h4>{user.email}</h4>
  //             <h4>{user.guid}</h4>
  //           </div>
  //         )
  //       })
  //     }
  //   </div>
  // );

  let changeUserType = () => {
    props.props.setIsTeacher(!props.props.isTeacher);
  }

  return (
      <Layout>
        <Header className="site-layout-sub-header-background">
          <Row justify="space-between">
            <Col >
              <h1>Your Profile</h1>
            </Col>
            <Col >
              <LogOut/>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '24px 16px 0'}}>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <Row align="top">
              <Col span={5} style={{marginRight: '80px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <Avatar size={120} src={props.props.Profile.avatar}/>
                <Button type="primary"  style={{marginTop: '30px'}} onClick={changeUserType}>{props.props.isTeacher ? "Become a student": "Become a teacher"}</Button>
              </Col>
              <Col span={8}>
                <ReduxProfileFormWrap onSubmit={onSubmit}/>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>LearningAcademy ©2020 Created by PolytechTeam</Footer>
      </Layout>
  );
}

export default Profile;
