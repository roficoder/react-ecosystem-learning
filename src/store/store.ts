import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.slice"; 
import userReducer from "./user.slice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})

export default store;

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore['dispatch'];
