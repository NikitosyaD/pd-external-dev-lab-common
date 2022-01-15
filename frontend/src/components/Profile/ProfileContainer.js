import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";

class ProfileAPIComponent extends React.Component {
  // componentDidMount() {
  //   let data = usersAPI.getUser(this.props.User.uid);
  //   debugger
  //   // console.log(data);
  //   // setProfile(data);
  // }

  render() {
    return <Profile props={this.props}/>
  }
}


let mapStateToProps = (state) => {
  return {
    Profile: state.Profile.Profile,
    User: state.User.User,
  }
}

const ProfileContainer = connect(mapStateToProps,
    {
      setProfile
    })(ProfileAPIComponent);

export default ProfileContainer;
