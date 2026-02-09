import { actions } from "./price-reducer";
import { AppDispatch } from "../store";
import { PriceType } from "../../types/price";
import { apiPrice } from "../../api/api-price";
import { handlerError } from "../../api/errorHandler";

const { createQuery, findAllQuery, findOneQuery, updateQuery, deleteQuery } =
  apiPrice;
const {
  createSuccess,
  getAllSuccess,
  getOneSuccess,
  priceMessage,
  updatePriceSuccess,
  deletePriceSuccess,
  priceRequest,
  priceError,
} = actions;

export const createPrice =
  (newOrder: PriceType) => async (dispatch: AppDispatch) => {
    dispatch(priceRequest());
    try {
      console.log(newOrder);

      const { data } = await createQuery(newOrder);
      dispatch(createSuccess(data.savedService));
      dispatch(priceMessage(data.message));
      return data;
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, priceError);
    }
  };

export const getPriceList = () => async (dispatch: AppDispatch) => {
  dispatch(priceRequest());
  try {
    const { data } = await findAllQuery();
    dispatch(getAllSuccess(data));
  } catch (error) {
    console.log(error);
    handlerError(error, dispatch, priceError);
  }
};

export const updatePrice =
  (id: PriceType["id"], updatedData: PriceType) =>
  async (dispatch: AppDispatch) => {
    dispatch(priceRequest());
    try {
      const { data } = await updateQuery(id, updatedData);
      dispatch(updatePriceSuccess(data));
      return data;
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, priceError);
    }
  };

export const deletePrice =
  (id: PriceType["id"]) => async (dispatch: AppDispatch) => {
    dispatch(priceRequest());
    try {
      if (!id) return;
      const { data } = await deleteQuery(id);
      dispatch(deletePriceSuccess(data));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, priceError);
    }
  };
