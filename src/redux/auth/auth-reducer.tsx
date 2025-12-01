import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("authToken");

const initialUserState = {
  user: null,
  token: token || null,
  error: null,
  isLoggedOn: !!token,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    registerSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedOn = true;
      state.isLoading = false;
      localStorage.setItem("authToken", payload.token);
    },

    logInSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedOn = true;
      state.isLoading = false;
    },

    logOutSuccess: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isLoggedOn = false;
      localStorage.removeItem("authToken");
    },

    getCurrentUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isLoggedOn = true;
    },

    authRequest: (state) => {
      state.isLoading = true;
    },
    authError: (state, { payload }) => {
      state.error = payload;
      state.isLoggedOn = false;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
