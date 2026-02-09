import { RootState } from "../store";

export const priceSelectorError = (state: RootState) => state.price.error;
export const priceSelectorLoading = (state: RootState) => state.price.isLoading;
export const priceSelectorPrices = (state: RootState) => state.price.prices;
export const priceSelectorMessage = (state: RootState) => state.price.message;
