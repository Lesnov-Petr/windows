import { createSlice } from "@reduxjs/toolkit";
import { PriceType } from "../../types/price";

const initialPriceState = {
  prices: [] as PriceType[],
  price: "",
  error: [],
  isLoading: false,
  message: "",
};

const { actions, reducer } = createSlice({
  name: "price",
  initialState: initialPriceState,
  reducers: {
    createSuccess: (state, { payload }) => {
      state.prices = [...state.prices, payload];
      state.isLoading = false;
    },

    getAllSuccess: (state, { payload }) => {
      state.prices = payload;
      state.isLoading = false;
    },

    getOneSuccess: (state, { payload }) => {
      state.price = payload.price;
      state.isLoading = false;
    },

    updatePriceSuccess: (state, { payload }) => {
      state.prices = state.prices.map((price: PriceType) =>
        price.id === payload.id ? payload : price,
      );
      state.isLoading = false;
    },

    deletePriceSuccess: (state, { payload }) => {
      state.message = payload.message;
      state.prices = state.prices.filter((price) => price.id !== payload.id);
      state.isLoading = false;
    },

    priceRequest: (state) => {
      state.isLoading = true;
    },
    priceError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    priceMessage: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
