import { combineReducers } from "redux";
import usersReducer from './user'



export default  combineReducers({
    users: usersReducer,
})