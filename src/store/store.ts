import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import commonSlice from "./reducers/commonSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    commonSlice: commonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
