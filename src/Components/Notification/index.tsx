import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../hooks";
import { orderSelectorError } from "../../redux/orders/orders-selectors";
import { actions as actionsOrder } from "../../redux/orders/orders-reducer";
import { actions as actionsAuth } from "../../redux/auth/auth-reducer";
import { authSelectorError } from "../../redux/auth/auth-selectors";

export const Notification: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectorOrderErr = useSelector(orderSelectorError);
  const authErrorSelector = useSelector(authSelectorError);

  useEffect(() => {
    console.log(selectorOrderErr);

    console.log(selectorOrderErr.length);

    if (selectorOrderErr.length) {
      selectorOrderErr.map((err) => toast.error(err));
      dispatch(actionsOrder.orderError(""));
      return;
    }

    if (authErrorSelector) {
      toast.error(authErrorSelector);
      dispatch(actionsAuth.authError(""));
      return;
    }
  }, [selectorOrderErr, authErrorSelector]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
};
