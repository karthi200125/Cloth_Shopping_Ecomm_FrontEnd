import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct: (state, action) => {
      const removedProduct = action.payload;
      const index = state.products.findIndex(
        (product) => product._id === removedProduct._id
      );
      if (index !== -1) {
        const removedQuantity = state.products[index].quantity;
        state.quantity -= removedQuantity;
        state.total -=
          removedProduct.price * removedQuantity;
        state.products.splice(index, 1);
      }
    },
  },
});

export const { addProduct, clearCart ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
