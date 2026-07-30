import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import commonSlice from "./reducers/commonSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    commonSlice: commonSlice,
    productSlice: productSlice,
    userSlice: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
