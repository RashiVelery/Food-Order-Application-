import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})


store.subscribe(() => {
  try {
    const state = store.getState();
    console.log("Cart state changed:", state.cart.value);

    localStorage.setItem('cart', JSON.stringify(state.cart.value));
  } catch {
    // ignore write errors
  }
});

export default store

