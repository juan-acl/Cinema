import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { setShowLoader } from './loader.slice'


interface Invoice {
    _id: String
    user: String
    no_seat: number[]
    total: number
}

interface Params {
    idUser: String
}

export const GetInvoicesById = createAsyncThunk('invoice/invoices-by-user', async ({ idUser }: Params, thunkAPI) => {
    try {
        thunkAPI.dispatch(setShowLoader(true));
        const response = await axios.post(process.env.API + 'invoice/invoices-by-user', { idUser })
        return response.data
    } catch (error) {
        console.log('Error getInvoicesById', { error })
        return []
    } finally {
        setTimeout(() => {
            thunkAPI.dispatch(setShowLoader(false))
        }, 2000)
    }
})