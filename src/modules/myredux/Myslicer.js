import { CreateSlice, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
  }


  export const Myfunction = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      }
    },
  })

  export const { increment, decrement} = Myfunction.actions
  export default Myfunction.reducer