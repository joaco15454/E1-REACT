import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  
    load: false,
};
export const userSlice = createSlice({
    name:"User",
    
    initialState,
    reducers: {
        changeState: (state,action) => {
            state.load= action.payload;
        }
    }
})

export const {changeState} = userSlice.actions
export default userSlice.reducer 