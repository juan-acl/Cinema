import { combineReducers } from "redux";
import { userReducer } from "@redux/slices/user.slice";
import { loaderReducer } from "@redux/slices/loader.slice"
import { cinemaReducer } from "@redux/slices/cinema.slice";


const rootReducer = combineReducers({
    user: userReducer,
    pageLoader: loaderReducer,
    cinema: cinemaReducer
})

export default rootReducer;