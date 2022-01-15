import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import { Menu, Layout } from "antd";
import logo from "./static/img/Logo.png";
import {
  BookOutlined,
  // CalendarOutlined,
  UnorderedListOutlined,
  UserOutlined,
  SnippetsOutlined,
  // DollarOutlined,
  // ContainerOutlined
} from "@ant-design/icons";

import 'antd/dist/antd.css';
import './App.css'

import Login from "./components/Login";
// import Payments from './components/Payments/Payments';
// import Archive from './components/Archive/Archive';
// import Payment_for_course from "./components/Payment_for_course/Payment_for_course";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import ProfileContainer from "./components/Profile/ProfileContainer";
import store from "./redux/store";
import HomeworkContainer from "./components/Homework/HomeworkContainer";
import HometasksContainer from "./components/Hometasks/HometasksContainer";
import GroupsListContainer from "./components/GroupsList/GroupsListContainer";

import { authAPI } from "./api/api";

// import Schedule from './components/Schedule/Schedule';

const { Sider } = Layout;


function App(props) {
  const [user] = useAuthState(auth)
  const [isTeacher, setIsTeacher] = useState(false);
  if (user) {
    store.dispatch({ type: "USER/SET_UID", data: user.uid })
    authAPI.login(user.uid, user.email, user.displayName);

    return (
      <div className="App">
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              breakpoint="md"
              collapsedWidth='0'
              zeroWidthTriggerStyle={{ marginTop: '-65px' }}
              className='mobile-side-bar'
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline">
                <Menu.Item>
                  <Link to='/'>
                    <img src={logo} alt='logo' />
                  </Link>
                </Menu.Item>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to='/profile'>
                    Profile
                  </Link>
                </Menu.Item>
                {
                  isTeacher ?
                    <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                      <Link to='/groups-list'>
                        Groups List
                      </Link>
                    </Menu.Item>
                    : <div></div>
                }

                {
                  isTeacher ?
                    <Menu.Item key="3" icon={<BookOutlined />}>
                      <Link to='/hometasks'>
                        Hometasks
                      </Link>
                    </Menu.Item>
                    : <div></div>
                }
                {
                  !isTeacher ?
                    <Menu.Item key="4" icon={<SnippetsOutlined />}>
                      <Link to='/homework'>
                        Homework
                      </Link>
                    </Menu.Item>
                    : <div></div>
                }
                {/* {
                  isTeacher ?
                    <Menu.Item key="5" icon={<CalendarOutlined />}>
                      <Link to='/create-schedule'>
                        Schedule
                      </Link>
                    </Menu.Item>
                    : <div></div>
                } */}
                {/* {
                  isTeacher ?
                    <Menu.Item key="7" icon={<DollarOutlined />}>
                      <Link to='/payments'>
                        Payments
                      </Link>
                    </Menu.Item>
                    : <div></div>
                } */}
                {/* {
                  !isTeacher ?
                    <Menu.Item key="8" icon={<DollarOutlined />}>
                      <Link to='/payment_for_course'>
                        Payment for the course
                      </Link>
                    </Menu.Item>
                    : <div></div>
                } */}
                {/* {
                  isTeacher ?
                    <Menu.Item key="9" icon={<ContainerOutlined />}>
                      <Link to='/archive'>
                        Archive
                      </Link>
                    </Menu.Item>
                    : <div></div>
                } */}

              </Menu>
            </Sider>

            <Switch>
              <Route exact path="/">
                <HomeworkContainer />
              </Route>
              <Route path="/profile">
                <ProfileContainer isTeacher={isTeacher} setIsTeacher={setIsTeacher} />
              </Route>
              <Route path="/groups-list">
                <GroupsListContainer />
              </Route>
              <Route path="/hometasks">
                <HometasksContainer />
              </Route>
              <Route path="/homework">
                <HomeworkContainer />
              </Route>
              {/* <Route path="/create-schedule">
                <Schedule />
              </Route> */}
              {/*<Route path="/students">*/}
              {/*  <p>students</p>*/}
              {/*</Route>*/}
              {/* <Route path="/payments">
                <Payments />
              </Route> */}
              {/* <Route path="/payment_for_course">
                <Payment_for_course />
              </Route> */}
              {/* <Route path="/archive">
                <Archive />
              </Route> */}
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  } else {
    return <Login />
  }
}



export default App;
