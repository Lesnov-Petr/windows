import { actions } from "./orders-reducer";
import { AppDispatch } from "../store";
import { OrderType } from "../../types/orderType";
import { apiOrders } from "../../api/api-orders";
import { handlerError } from "../../api/errorHandler";

const { createQuery, findAllQuery, findOneQuery, updateQuery, deleteQuery } =
  apiOrders;
const {
  createSuccess,
  getAllSuccess,
  getOneSuccess,
  orderRequest,
  orderError,
} = actions;

export const createOrder =
  (newOrder: OrderType) => async (dispatch: AppDispatch) => {
    dispatch(orderRequest());
    try {
      const { data } = await createQuery(newOrder);
      console.log(data);

      dispatch(createSuccess(data));
      return data;
    } catch (error) {
      console.log(error);

      handlerError(error, dispatch, orderError);
    }
  };

export const getAllOrders = () => async (dispatch: AppDispatch) => {
  dispatch(orderRequest());
  try {
    const { data } = await findAllQuery();
    dispatch(getAllSuccess(data));
  } catch (error) {
    console.log(error);
    handlerError(error, dispatch, orderError);
  }
};
