import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: Object | null;
  isLoading: boolean;
}

const intialState: UserState = {
  userData: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: intialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Object>) => {
      state.userData = action.payload;
      console.log(state.userData);
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserData, setLoading } = userSlice.actions;

export default userSlice.reducer;
