import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}


const initialState: CounterState = {

    count: 5

}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
});

export const {} = counterSlice.actions

export default counterSlice.reducer