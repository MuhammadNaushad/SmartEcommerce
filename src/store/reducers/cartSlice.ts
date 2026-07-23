import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/productType";
import { CartItemProps } from "../../types/cartItemType";

export interface CartItemSlice {
  product: CartItemProps;
  qty: number;
  sum: number;
}
export interface CartState {
  items: CartItemSlice[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //addItemToCart
    addItemToCart: (state, action: PayloadAction<ProductProps>) => {
      console.log(state.items);
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum += action.payload.price;
      } else {
        state.items.push({
          product: action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },
    //removeItemFromCart
    removeItemToCart: (state, action: PayloadAction<ProductProps>) => {
      console.log(state.items);

      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );
      if (existingItem) {
        if (existingItem.qty !== 1) {
          existingItem.qty -= 1;
          existingItem.sum -= action.payload.price;
          console.log(existingItem.qty);
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.id,
          );
        }
      } else {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.id,
        );
      }
    },
    //removeProductFromCart
    removeProductFromCart: (state, action: PayloadAction<ProductProps>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id,
      );
    },
    //emptyCart
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  removeProductFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
