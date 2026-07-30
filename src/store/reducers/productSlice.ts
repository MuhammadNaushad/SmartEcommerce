import { ProductProps } from "./../../types/productType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  productsList: ProductProps[];
}

const initialState: ProductState = {
  productsList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, actions: PayloadAction<ProductProps[]>) => {
      state.productsList = actions.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
