import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
   
    cartvalue: localStorage.getItem("addtocart")
      ? JSON.parse(localStorage.getItem("addtocart"))
      : [],
  },
  reducers: {
    addtocart: (state, action) => {
      let data1 = state.cartvalue.find(
        (item) => item.title === action.payload.title,
      );
      if (data1) {
        data1.quantity += 1;
      } else {
        state.cartvalue.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("addtocart", JSON.stringify(state.cartvalue));
    },
    incrementaddtocart: (state, action) => {
      console.log();

      state.cartvalue.map((item) => {
        if (item.title === action.payload.title) {
          item.quantity += 1;
        }
      });
      localStorage.setItem("addtocart", JSON.stringify(state.cartvalue));
    },
    decrementaddtocart: (state, action) => {
      state.cartvalue.map((item) => {
        if (item.title === action.payload.title) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          }
        }
      });
      localStorage.setItem("addtocart", JSON.stringify(state.cartvalue));
    },
    deleteaddtocart: (state, action) => {
      state.cartvalue.map((item, index) => {
        if (item.title === action.payload.title) {
          state.cartvalue.splice(index, 1);
        }
      });
      localStorage.setItem("addtocart", JSON.stringify(state.cartvalue));
    },
  },
});
export const { addtocart, incrementaddtocart, decrementaddtocart, deleteaddtocart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer