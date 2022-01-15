const TOGGLE_HOMEWORK_STATUS = "HOMEWORKS/TOGGLE_HOMEWORK_STATUS";
export const SET_HOMEWORKS = "HOMEWORKS/SET_HOMEWORKS";

let initialState = {
  Homeworks: [
    {
      name: "",
      due_date: "",
      description: "",
      group_name: "",
      id: "",
      // isDeleted: false,
      links: [""],
      // is_ready: false
    },
  ]
}

export const homeworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HOMEWORK_STATUS:
      state.Homeworks.find(item => item.id === action.id).is_ready = action.status;
      return {
        ...state
      }
    case SET_HOMEWORKS:
      return {
        ...state,
        Homeworks: [
          ...action.data
        ]
      }
    default:
      return state;
  }
}

export const toggleHomeworkStatus = (status, id) => ({ type: TOGGLE_HOMEWORK_STATUS, status, id });
export const setHomeworks = (data) => ({ type: SET_HOMEWORKS, data });
