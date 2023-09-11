import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "pizza",
    initialState: {
        cart: [],
        totalPrice: 0,
        totalQuantity: 0,
    },

    reducers: {
        addProduct(state, action) {
            let find = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeProduct(state, action) {
            state.cart = state.cart.filter((product) => {
                return product.id !== action.payload.id;
            });
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        increaseItemQuantity(state, action) {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
        },
        decreaseItemQuantity(state, action) {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: Math.max(1, item.quantity - 1),
                    };
                }
                return item;
            });
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
            state.itemPrice = 0;
            state.itemQuantity = 0;
        },
    },
});

export const {
    addProduct,
    removeProduct,
    getCartTotal,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
