import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Services/LocalStorageService";

const userSlice = createSlice({
    name:"jwt",
    initialState:localStorage.getItem("token"),
    reducers:{
        setJwt:(state,action)=>{
            localStorage.setItem("token", action.payload);
            state=action.payload;
            return state;
        },
        removeUser:(state)=>{
           localStorage.removeItem("token");
            state="";
            return state;
        }
    }
});

export const {setJwt,removeUser}=userSlice.actions;
export default userSlice.reducer;