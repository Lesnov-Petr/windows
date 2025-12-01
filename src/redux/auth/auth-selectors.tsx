import { RootState } from "../store";

const authSelectorError = (state: RootState) => state.auth.error;
const authSelectorToken = (state: RootState) => state.auth.token;
const authSelectorLogged = (state: RootState) => state.auth.isLoggedOn;
const authSelectorLoading = (state: RootState) => state.auth.isLoading;

export {
  authSelectorError,
  authSelectorToken,
  authSelectorLogged,
  authSelectorLoading,
};
