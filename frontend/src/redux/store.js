import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./userReducer";
import {profileReducer} from "./profileReducer";
import {homeworkReducer} from "./homeworkReducer";
import {groupsListReducer} from "./groupsListReducer";
import {reducer as formReducer} from "redux-form";
import {studentsReducer} from "./studentsReducer";

let reducers = combineReducers({
  User: userReducer,
  Profile: profileReducer,
  Homework: homeworkReducer,
  GroupsList: groupsListReducer,
  Students: studentsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware()
));


// let store = createStore(reducers);

window.store = store
export default store;
