import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = {
  orders: [],
  order: null,
  error: [],
  isLoading: false,
  message: "",
};

const { actions, reducer } = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    createSuccess: (state, { payload }) => {
      state.order = payload.order;
      state.isLoading = false;
    },

    getAllSuccess: (state, { payload }) => {
      state.orders = payload;
      state.isLoading = false;
    },

    getOneSuccess: (state, { payload }) => {
      state.order = payload.order;
      state.isLoading = false;
    },

    updateOrderSuccess: (state, { payload }) => {
      state.order = payload;
      state.isLoading = false;
    },

    deleteOrderSuccess: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
    },

    orderRequest: (state) => {
      state.isLoading = true;
    },
    orderError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
