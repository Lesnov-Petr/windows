import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "../../types/orderType";

const initialOrderState = {
  orders: [] as OrderType[],
  ordersClient: [] as OrderType[],
  order: {} as OrderType,
  error: [],
  isLoading: false,
  message: "",
};

const { actions, reducer } = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    createSuccess: (state, { payload }) => {
      state.orders = [...state.orders, payload];
      state.isLoading = false;
    },

    getAllSuccess: (state, { payload }) => {
      state.orders = payload;
      state.isLoading = false;
    },

    getAllByIdClientSuccess: (state, { payload }) => {
      state.ordersClient = payload;
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
      state.ordersClient = state.ordersClient.filter(
        (order) => order.id !== payload.id,
      );
      state.orders = state.orders.filter((order) => order.id !== payload.id);
      state.message = payload.message;
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
