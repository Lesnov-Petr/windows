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
import { actions as actionsPrice } from "../../redux/price/price-reducer";
import { actions as actionsAuth } from "../../redux/auth/auth-reducer";
import { authSelectorError } from "../../redux/auth/auth-selectors";
import { clientSelectorMessage } from "../../redux/clients/client-selectors";
import {
  priceSelectorError,
  priceSelectorMessage,
} from "../../redux/price/price-selectors";

export const Notification: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectorClientMessage = useSelector(clientSelectorMessage);
  const selectorOrderErr = useSelector(orderSelectorError);
  const seletorOrderMessage = useSelector(orderSelectorMessage);
  const selectorPriceErr = useSelector(priceSelectorError);
  const selectorPriceMessage = useSelector(priceSelectorMessage);
  const authErrorSelector = useSelector(authSelectorError);

  // Функция для обработки уведомлений
  const handlerNotification = (
    selector: string | string[] | null,
    action: { payload: string; type: string },
  ) => {
    if (!selector) return;

    if (typeof selector === "string") {
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
      // Order Успешное сообщение
      handlerNotification(
        seletorOrderMessage,
        actionsOrder.deleteOrderSuccess(""),
      );
    }
    // Orrder Ошибка
    if (selectorOrderErr) {
      handlerNotification(selectorOrderErr, actionsOrder.orderError(""));
    }

    // Auth Ошибка
    if (authErrorSelector) {
      handlerNotification(authErrorSelector, actionsAuth.authError(""));
    }

    // Price Ошибка
    if (selectorPriceErr) {
      handlerNotification(selectorPriceErr, actionsPrice.priceError(""));
    }
    // Price Успешное сообщение
    if (selectorPriceMessage) {
      handlerNotification(selectorPriceMessage, actionsPrice.priceMessage(""));
    }
  }, [
    selectorPriceErr,
    selectorPriceMessage,
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
