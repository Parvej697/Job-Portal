import { createSlice } from "@reduxjs/toolkit";


const sortSlice = createSlice({
    name: "sort",
    initialState: {},
    reducers: {
        updateSort: (state, action) => {
            state = action.payload;
            console.log("Sort Updated", state);
            return state;
        },

        resetSort: (state) => {
            state = {};
            return state;
        },
    },
});

export const { updateSort, resetSort } = sortSlice.actions;

export default sortSlice.reducer;
