import { createSlice } from "@reduxjs/toolkit";
export const counterSlice =  createSlice ({
    name: "Counter",
    initialState : {
        count : 1
    },
    reducers :{
        increment : (state)=>{
            state.count++;
        },
        decrement : (state) => {
            state.count --;
        },
        increateByAmount : (state,action) => {
            state.count+=action.payload
        }
    }
});
export const {increment,decrement,increateByAmount} = counterSlice.actions;
export default counterSlice.reducer;