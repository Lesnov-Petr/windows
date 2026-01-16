import { RootState } from "../store";

export const clientSelectorError = (state: RootState) => state.client.error;
export const clientSelectorLoading = (state: RootState) =>
  state.client.isLoading;
export const clientSelectorClients = (state: RootState) => state.client.clients;
