import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import commonSlice from "./reducers/commonSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import { persistedCartSlice } from "./persisted/persistConfig";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    cartSlice: persistedCartSlice, //cartSlice,
    commonSlice: commonSlice,
    productSlice: productSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/setUserData",
          "common/setLoading",
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
