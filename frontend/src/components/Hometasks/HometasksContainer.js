import React from "react";
import { connect } from "react-redux";
import { setHomeworks } from "../../redux/homeworkReducer";
import { groupsListAPI, homeworksAPI } from "../../api/api";
import Hometasks from "./Hometasks";
import { setGroupsList } from "../../redux/groupsListReducer";

class HometasksAPIComponent extends React.Component {
  componentDidMount() {
    homeworksAPI.getHomeworks().then(response => {
      this.props.setHomeworks(response);
    });
    groupsListAPI.getGroupsList().then(response => {
      this.props.setGroupsList(response);
    });
  }

  render() {
    return <Hometasks {...this.props} />
  }
}


let mapStateToProps = (state) => {
  return {
    Homeworks: state.Homework.Homeworks,
    GroupsList: state.GroupsList.GroupsList
  }
}

const HometasksContainer = connect(mapStateToProps, {
  setHomeworks,
  setGroupsList
})(HometasksAPIComponent);

export default HometasksContainer;
