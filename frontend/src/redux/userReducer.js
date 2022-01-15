const SET_UID = "USER/SET_UID";

let initialState = {
  User: {
    uid: null,
  },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UID:
      return {
        ...state,
        User: {
          ...state.User,
          uid: action.data
        }
      }
    default:
      return state;
  }
}