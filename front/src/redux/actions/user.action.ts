import axios from 'axios';


export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export const Log_in = (email: string, password: string) => async (dispatch) => {
    try {
        const response = await axios.post(process.env.API, { email, password })
        dispatch(UserLogin(response.data.user))
    } catch (error) {
        console.log('Error login: ' + error)
    } finally {

    }
}

export const UserLogin = (profile) => ({
    type: USER_LOGIN,
    profile
})