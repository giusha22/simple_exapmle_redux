import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        loading: false,
        userData: [],
        someData: [],
        error: null,
    },
    reducers:{},
});

export const userReducer = userSlice.reducer;