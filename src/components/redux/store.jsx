import { configureStore } from "@reduxjs/toolkit";
import loadReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        load: loadReducer,
    }
})