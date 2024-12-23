import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice( {
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addToCart: (state , action) => {
            // console.log(action);
            let oldIndex = -1;
            state.value.forEach((item , index) => {
                if(item._id == action.payload._id) {
                    oldIndex = index;
                }
            })
            if(oldIndex === -1) { 
                state.value = [...state.value , action.payload]
            } else {
                state.value[oldIndex].count++;
                state.value = state.value;
            }
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