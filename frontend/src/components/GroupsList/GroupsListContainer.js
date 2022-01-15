import React from "react";
import { connect } from "react-redux";
import { groupsListAPI, studentsAPI } from "../../api/api";
import GroupsList from "./GroupsList";
import { setGroupsList } from "../../redux/groupsListReducer";
import { setStudents } from "../../redux/studentsReducer";

class GroupsListAPIComponent extends React.Component {
  componentDidMount() {
    studentsAPI.getStudents().then(response => {
      this.props.setStudents(response);
    });
    groupsListAPI.getGroupsList().then(response => {
      this.props.setGroupsList(response);
    });
  }

  render() {
    return <GroupsList {...this.props} />
  }
}


let mapStateToProps = (state) => {
  return {
    GroupsList: state.GroupsList.GroupsList,
    Students: state.Students.Students
  }
}

const GroupsListContainer = connect(mapStateToProps, {
  setGroupsList,
  setStudents
})(GroupsListAPIComponent);

export default GroupsListContainer;
