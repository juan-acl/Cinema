import * as ACTIONS from "@redux/actions/user.action";

const initialState = {
    profile: {},
    login: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN:
            return {
                ...state,
                profile: action.profile,
                login: true,
            }
        case ACTIONS.USER_LOGOUT:
            return {
                ...state,
                profile: {},
                login: false,
            }
        default:
            return state;
    }
}