import React from "react";
import {connect} from "react-redux";
import Homework from "./Homework";
import {setHomeworks, toggleHomeworkStatus} from "../../redux/homeworkReducer";
import {homeworksAPI} from "../../api/api";

class HomeworkAPIComponent extends React.Component {
  componentDidMount() {
    homeworksAPI.getHomeworks().then(response => {
      this.props.setHomeworks(response);
    });
  }

  render() {
    return <Homework {...this.props}/>
  }
}


let mapStateToProps = (state) => {
  return {
    Homeworks: state.Homework.Homeworks,
    toggleHomeworkStatus: state.Homework.toggleHomeworkStatus
  }
}

const HomeworkContainer = connect(mapStateToProps, {
  toggleHomeworkStatus,
  setHomeworks
})(HomeworkAPIComponent);

export default HomeworkContainer;
