import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../hooks";
import {
  orderSelectorError,
  orderSelectorMessage,
} from "../../redux/orders/orders-selectors";
import { actions as actionsClient } from "../../redux/clients/client-reducer";
import { actions as actionsOrder } from "../../redux/orders/orders-reducer";
import { actions as actionsAuth } from "../../redux/auth/auth-reducer";
import { authSelectorError } from "../../redux/auth/auth-selectors";
import { clientSelectorMessage } from "../../redux/clients/client-selectors";

export const Notification: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectorClientMessage = useSelector(clientSelectorMessage);
  const selectorOrderErr = useSelector(orderSelectorError);
  const seletorOrderMessage = useSelector(orderSelectorMessage);
  const authErrorSelector = useSelector(authSelectorError);

  // Функция для обработки уведомлений
  const handlerNotification = (
    selector: string | string[] | null,
    action: { payload: string; type: string },
  ) => {
    if (!selector) return;

    if (typeof selector === "string") {
      console.log(selector);

      toast(selector);
    } else if (Array.isArray(selector)) {
      selector.forEach((err) => toast.error(String(err)));
    }

    dispatch(action);
  };

  useEffect(() => {
    // Успешное сообщение клиента
    if (selectorClientMessage) {
      handlerNotification(
        selectorClientMessage,
        actionsClient.deleteClientSuccess(""),
      );
    }
    if (seletorOrderMessage) {
      // Успешное сообщение заказа
      handlerNotification(
        seletorOrderMessage,
        actionsOrder.deleteOrderSuccess(""),
      );
    }

    // Ошибка заказа
    if (selectorOrderErr) {
      handlerNotification(selectorOrderErr, actionsOrder.orderError(""));
    }

    // Ошибка авторизации
    if (authErrorSelector) {
      handlerNotification(authErrorSelector, actionsAuth.authError(""));
    }
  }, [
    selectorOrderErr,
    authErrorSelector,
    seletorOrderMessage,
    selectorClientMessage,
  ]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      theme="light"
    />
  );
};
