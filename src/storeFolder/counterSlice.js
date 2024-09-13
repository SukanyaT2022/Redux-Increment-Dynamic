import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  //state or varable
  name: 'counter', 
  initialState,
  reducers: {
    //(state) hold current value on app.js
    increment: (state) => {
//increment is function
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // do dynamic way that we can change value dynamic
    // from applyMiddleware.js line15
    add5: (state,val)=>{
      // state.value += val.payload
      // line 12 val and line 13 val.payload
      //payload is a default to sent datat
    }
    
  },
})

export const { increment, decrement, add5, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer