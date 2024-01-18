import React from 'react'
import  {createSlice} from '@reduxjs/toolkit'

let tos=createSlice({
    name:'To do list',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            let data=action.payload;
            state.push(data)
        },
        ser:(state,action)=>{
          state.length=0;
          let rev=action.payload;
            state.splice(0,0,...rev.reverse())
        },
        upds:(state,action)=>{
            let val=action.payload;
            state[val[0]]=val[1];
        },
        dels:(state,action)=>{
            
            state.splice(action.payload,1)
        },
    }
})
export let {upds,add,ser,dels}=tos.actions;
export default tos.reducer;
