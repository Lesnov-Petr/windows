import { RootState } from "../store";

export const orderSelectorError = (state: RootState) => state.order.error;
export const orderSelectorLoading = (state: RootState) => state.order.isLoading;
export const orderSelectorOrders = (state: RootState) => state.order.orders;
