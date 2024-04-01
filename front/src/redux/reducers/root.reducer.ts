import { combineReducers } from "redux";
import { userReducer } from "@redux/slices/user.slice";
import { loaderReducer } from "@redux/slices/loader.slice"


const rootReducer = combineReducers({
    user: userReducer,
    pageLoader: loaderReducer
})

export default rootReducer;