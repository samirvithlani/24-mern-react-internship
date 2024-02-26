import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        //action --> type payload
        addToCart(state, action){
            state.items.push(action.payload)
        },
        
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;