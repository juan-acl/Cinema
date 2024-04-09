import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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

interface ReservationSeat {
    idCinema: String
    idUser: String
    no_seats: number[]
    image: String
    nameMovie: String
}

interface Cinema {
    invoice: ReservationSeat
}

const initialState: Cinema = {
    invoice: {
        idCinema: '',
        no_seats: [],
        nameMovie: '',
        image: '',
        idUser: ''

    }
}

const cinameSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        setReservationSeat: (state, action: PayloadAction<Cinema>) => {
            state.invoice.idCinema = action.payload.invoice.idCinema
            state.invoice.idUser = action.payload.invoice.idUser
            state.invoice.no_seats = action.payload.invoice.no_seats
            state.invoice.image = action.payload.invoice.image
            state.invoice.nameMovie = action.payload.invoice.nameMovie
        }
    }
})

export const ReservationSeats = createAsyncThunk('cinema/create-reservation', async ({ idCinema, idUser, no_seats, image, nameMovie }: ReservationSeat, thunkAPI) => {
    try {
        thunkAPI.dispatch(setShowLoader(true))
        const response = await axios.post(process.env.API + 'cinema/create-reservation', { idCinema, idUser, no_seats })
        thunkAPI.dispatch(cinameSlice.actions.setReservationSeat({ invoice: { idCinema, idUser, no_seats, image, nameMovie } }))
        return response.data.cinema
    } catch (error) {
        console.log('Error ReservationSeats', { error })
        return []
    } finally {
        setTimeout(() => {
            thunkAPI.dispatch(setShowLoader(false))
        }, 1000)
    }
})

export const GetCinemas = createAsyncThunk('cinema/getCinemas', async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(setShowLoader(true))
        const response = await axios.post(process.env.API + 'cinema/getCinemas');
        return response.data
    } catch (error) {
        console.log('Error getCinemas', { error })
        return []
    } finally {
        setTimeout(() => {
            thunkAPI.dispatch(setShowLoader(false))
        }, 500)
    }
})

export const { setReservationSeat } = cinameSlice.actions
const cinemaReducer = cinameSlice.reducer
export { cinemaReducer }
