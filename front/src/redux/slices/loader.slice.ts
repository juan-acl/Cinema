import { createSlice } from '@reduxjs/toolkit';

export const set_show_loader = "LOADER:ISLOADING";

interface LoaderState {
    loading: boolean
}

const initialState: LoaderState = {
    loading: false,
};

const loaderSlice = createSlice({
    name: 'pageLoader',
    initialState,
    reducers: {
        setShowLoader: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setShowLoader } = loaderSlice.actions;
const loaderReducer = loaderSlice.reducer;
export { loaderReducer }