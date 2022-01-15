export const SET_GROUPS_LIST = "GROUPS/SET_GROUPS_LIST";
const ADD_TO_GROUPS_LIST = "GROUPS/ADD_TO_GROUPS_LIST";

let initialState = {
  GroupsList: [
    {
      id: "",
      name: "",
      lang: "",
      lvl: null,
      students_count: null,
      key: ""
    },
  ]
}

export const groupsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUPS_LIST:
      return {
        ...state,
        GroupsList: [
            ...action.data
        ]
      }
    case ADD_TO_GROUPS_LIST:
      return {
        ...state,
        GroupsList: [
            ...state.GroupsList,
            action.data
        ]
      }
    default:
      return state;
  }
}

export const setGroupsList = (data) => ({type: SET_GROUPS_LIST, data});
export const addToGroupsList = (data) => ({type: ADD_TO_GROUPS_LIST, data});
