const SET_PROFILE = "PROFILE/SET_PROFILE";

let initialState = {
  Profile: {
    avatar: null,
    name: "",
    last_name: "",
  },
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        Profile: {
          ...state.Profile,
          name: action.data.name,
          last_name: action.data.last_name,
        }
      }
    default:
      return state;
  }
}

export const setProfile = (data) => ({type: SET_PROFILE, data});
