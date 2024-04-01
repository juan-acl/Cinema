import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { setShowLoader } from "./loader.slice";

interface UserState {
    profile: User | null,
    login: boolean,
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface User {
    _id: string,
    name: string,
    lastaname: string
    email: string
    password: string
    __v: number
}

// Estado incial de redux
const initialState: UserState = {
    profile: null,
    login: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setProfileUser: (state, action: PayloadAction<User>) => {
            state.profile = action.payload;
            state.login = true;
        },
        UserLogin: (state, action) => {
            state.profile = action.payload;
            state.login = true;
        },
    }
})

export const log_in = createAsyncThunk('user/login', async ({ email, password }: LoginCredentials, thunkAPI) => {
    try {
        thunkAPI.dispatch(setShowLoader(true));
        const response = await axios.post(process.env.API + 'user/login', { email, password });
        if (response.data.status === 200) {
            setTimeout(() => {
                thunkAPI.dispatch(userSlice.actions.setProfileUser(response.data.user));
            }, 2000)
            return 'success';
        } else {
            return 'error';
        }
    } catch (error) {
        console.log('Error login: ' + error)
        return 'error'
    } finally {
        setTimeout(() => {
            thunkAPI.dispatch(setShowLoader(false));
        }, 2000)
    }
});

export const { setProfileUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export { userSlice, userReducer }

