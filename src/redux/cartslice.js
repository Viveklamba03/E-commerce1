import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((x) => x.id === item.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }

      console.log("🟢 ADD_TO_CART triggered:");
      console.log("Payload:", item);
      console.log("Current cartItems:", JSON.parse(JSON.stringify(state.cartItems)));
    },

    decreaseQty: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((x) => x.id === item.id);

      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter((x) => x.id !== item.id);
      } else {
        exist.qty -= 1;
      }

      console.log("🟠 DECREASE_QTY triggered:");
      console.log("Payload:", item);
      console.log("Current cartItems:", JSON.parse(JSON.stringify(state.cartItems)));
    },

    clearCart: (state) => {
      state.cartItems = [];
      console.log("🔴 CLEAR_CART triggered:");
      console.log("Current cartItems:", state.cartItems);
    },
  },
});

export const { addToCart, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
