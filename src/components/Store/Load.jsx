import { createSlice } from "@reduxjs/toolkit";
let Load= createSlice({
    name:'load',
    initialState:[false],
    reducers:{
        sear:(state,actions)=>{
            state.length=0;
            state.push(actions.payload)
        }
    }
})
export let {sear}=Load.actions;
export default Load.reducer;