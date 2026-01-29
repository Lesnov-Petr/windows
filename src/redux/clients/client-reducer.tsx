import { createSlice } from "@reduxjs/toolkit";
import { ClientType } from "../../types/client";

const initialClientState = {
  clients: [] as ClientType[],
  client: {} as ClientType,
  message: "",
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
      state.client = payload;
      state.isLoading = false;
    },

    updateClientSuccess: (state, { payload }) => {
      state.client = payload;
      state.isLoading = false;
    },

    deleteClientSuccess: (state, { payload }) => {
      console.log("Сообщение", payload);

      state.message = payload;
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
