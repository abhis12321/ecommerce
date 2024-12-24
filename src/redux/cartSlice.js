import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice( {
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addToCart: (state , action) => {
            // console.log(action)
            state.value = action.payload;
        },
        removeFromCart: (state , action) => {
            state.value = state.value.filter(item => item._id != action.payload.removeById)
        },
        emptyCart: (state) => {
            state.value = [];
        },
    }
})


export const { addToCart , removeFromCart , emptyCart } = cartSlice.actions;

export default cartSlice.reducer;