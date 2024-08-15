import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
