import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLogout: false,
};

const commonSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showLogoutDailog: (state, action: PayloadAction<boolean>) => {
      state.isLogout = action.payload;
    },
  },
});

export const { setLoading, showLogoutDailog } = commonSlice.actions;
export default commonSlice.reducer;
