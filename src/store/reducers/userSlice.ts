import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: Object;
}

const intialState: UserState = {
  userData: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: intialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Object>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
