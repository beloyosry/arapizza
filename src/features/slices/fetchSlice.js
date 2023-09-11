import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "pizza",
    initialState: {
        product: [],
    },

    reducers: {
        addProduct ( state, action )
        {
            const product = action.payload;
            state.product.push( {
                id: product.id,
                name: product.name,
                price: product.price,
                size: product.size,
                img: product.img
            })
        },
    },
} );

export const { addProduct} = createSlice.actions;

export default cartSlice.reducer;
