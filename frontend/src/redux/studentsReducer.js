const SET_STUDENTS = "STUDENTS/SET_STUDENTS";

let initialState = {
  Students: [
    {
      id: "",
      guid: "",
      name: "",
      email: "",
      last_name: ""
    },
  ]
}

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        Students: [
            ...action.data
        ]
      }
    default:
      return state;
  }
}

export const setStudents = (data) => ({type: SET_STUDENTS, data});
