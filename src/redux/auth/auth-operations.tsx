import axios from "axios";
import { actions } from "./auth-reducer";
import { AppDispatch, RootState } from "../store";
import { handleAuthError, apiAuth } from "../../api";
import { CredentialsType } from "../../types/credentials";

const { signUpQuery, signInQuery, logOutQuery, getCurrentUserQuery } = apiAuth;
const { authRequest, authError } = actions;
const { registerSuccess, logOutSuccess, getCurrentUserSuccess } = actions;

// Вынесем обработку токена в отдельный модуль для повторного использования
const token = {
  set(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(): void {
    delete axios.defaults.headers.common.Authorization;
  },
};

const signUp = (newUser: CredentialsType) => async (dispatch: AppDispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await signUpQuery(newUser);
    token.set(data.token);
    dispatch(registerSuccess(data));
    return data;
  } catch (error) {
    handleAuthError(error, dispatch, authError);
  }
};

const signIn =
  (credentials: CredentialsType) => async (dispatch: AppDispatch) => {
    dispatch(authRequest());
    try {
      const { data } = await signInQuery(credentials);
      token.set(data.token);
      dispatch(registerSuccess(data));
      return data;
    } catch (error) {
      console.log(error);
      handleAuthError(error, dispatch, authError);
    }
  };

const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(authRequest());
  try {
    await logOutQuery();
    token.unset();
    dispatch(logOutSuccess());
    // Лучше использовать redux-persist или обрабатывать в редюсере
    localStorage.removeItem("user");
  } catch (error) {
    handleAuthError(error, dispatch, authError);
  }
};

const getCurrentUser =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const {
      auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) return;

    token.set(persistedToken);
    dispatch(authRequest());

    try {
      const { data } = await getCurrentUserQuery();
      dispatch(getCurrentUserSuccess(data.currentUser));
    } catch (error) {
      // При ошибке текущего пользователя очищаем токен
      token.unset();
      handleAuthError(error, dispatch, authError);
    }
  };

export { signUp, signIn, logOut, getCurrentUser };
