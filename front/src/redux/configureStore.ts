import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rootReducer from "@redux/reducers/root.reducer";


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>; // sirve para el autocompletado del useSelector
export type AppDispatch = typeof store.dispatch; // Sirve para el tipo del dispatch en el componente
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;