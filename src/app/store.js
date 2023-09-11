import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/slices/cartSlice";
import {
    addProduct,
    removeProduct,
    getCartTotal,
    decreaseItemQuantity,
    increaseItemQuantity,
    clearCart
} from "../features/slices/cartSlice";
const store = configureStore({
    reducer: { cart: cartSlice },
});

export {
    store,
    addProduct,
    removeProduct,
    getCartTotal,
    decreaseItemQuantity,
    increaseItemQuantity,
    clearCart
};
