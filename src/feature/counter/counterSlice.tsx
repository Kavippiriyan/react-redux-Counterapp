import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    count: 0,

}
export const counterSlice = createSlice(
    {
        name: "Counter",
        initialState,
        reducers: {
            increment: (state) => {
                state.count += 1
            },
            decrement: (state) => {
                state.count -= 1
            },
            reset: (state) => {
                state.count = 0
            },
            incremetnByAmount: (state, action) => {
                state.count += action.payload
            }

        }
    }
)

export const { increment, decrement,reset,incremetnByAmount } = counterSlice.actions;

export default counterSlice.reducer;