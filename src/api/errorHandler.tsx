import axios from "axios";
import { AppDispatch } from "../redux/store";

// Тип для action creator'а
type ErrorActionType = (payload: string) => {
  type: string;
  payload: string;
};

// Общий обработчик ошибок
export const handlerError = (
  error: unknown,
  dispatch: AppDispatch,
  reducerError: ErrorActionType,
): void => {
  if (axios.isAxiosError(error)) {
    const errorMessage =
      (error.response?.data as { message?: string })?.message || error.message;
    dispatch(reducerError(errorMessage));
  } else if (error instanceof Error) {
    dispatch(reducerError(error.message));
  } else {
    dispatch(reducerError("Unknown error occurred"));
  }
};
