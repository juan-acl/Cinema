import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setShowLoader } from "./loader.slice";
import axios from "axios";

interface CinemaState {
    _id: String
    seats: Seats[]
    nameMovie: String
    image: String
}

interface Seats {
    seat: Seat[]
}

interface Seat {
    status: Number
    no_seat: Number
}

const initialState = {

}

export const GetCinemas = createAsyncThunk('cinema/getCinema', async ({ }, thunkAPI) => {
    try {
        thunkAPI.dispatch(setShowLoader(true))
        const response = await axios.post(process.env.API + 'cinema/getCinemas');
        return response.data
    } catch (error) {
        console.log('Error getCinemas', error)
        return []
    } finally {
        setTimeout(() => {
            thunkAPI.dispatch(setShowLoader(false))
        }, 2000)
    }
})
