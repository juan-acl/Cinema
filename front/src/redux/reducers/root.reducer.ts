import { combineReducers } from "redux";
import UserReducer from "@redux/reducers/user.areducer";


const rootReducer = combineReducers({
    user: UserReducer
})

export default rootReducer;