import { createSlice } from '@reduxjs/toolkit'



const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");

    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: loadCart(),   // still an array
  },

  reducers: {
    removeCart: state => {

      state.value = []
    },

    AddProductToCart: (state, action) => {
      console.log("AddProductToCart called with:", action.payload);

      const item = action.payload;
      const existingItem = state.value.find(i => i.id === item.id);


      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.value.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    },

    DecreaseProductQty: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.value.find(i => i.id === id);
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.value = state.value.filter(i => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.value = [];          // empty the cart
    },


  },
})

// Action creators are generated for each case reducer function
export const { removeCart, AddProductToCart, DecreaseProductQty, clearCart } = cartSlice.actions

export default cartSlice.reducer