import { createSlice } from "@reduxjs/toolkit";

const initialClientState = {
  clients: [],
  client: null,
  error: null,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: initialClientState,
  reducers: {
    createSuccess: (state, { payload }) => {
      state.client = payload.client;
      state.isLoading = false;
    },

    getAllSuccess: (state, { payload }) => {
      state.clients = payload;
      state.isLoading = false;
    },

    getOneSuccess: (state, { payload }) => {
      state.client = payload.client;
      state.isLoading = false;
    },

    clientRequest: (state) => {
      state.isLoading = true;
    },
    clientError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
