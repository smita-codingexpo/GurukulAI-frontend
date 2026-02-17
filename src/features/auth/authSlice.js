import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { loginPending, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
