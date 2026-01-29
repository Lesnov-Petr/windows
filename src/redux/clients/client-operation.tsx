import { actions } from "./client-reducer";
import { AppDispatch } from "../store";
import { ClientType, UpdateClientType } from "../../types/client";
import { apiClients } from "../../api/api-clients";
import { handlerError } from "../../api/errorHandler";
import { log } from "node:console";

const {
  createQuery,
  findAllQuery,
  findOneByIdQuery,
  findOneByPhoneQuery,
  updateQuery,
  deleteQuery,
} = apiClients;
const {
  createSuccess,
  getAllSuccess,
  getOneSuccess,
  updateClientSuccess,
  deleteClientSuccess,
  clientRequest,
  clientError,
} = actions;

export const createClient =
  (newClient: ClientType) => async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await createQuery(newClient);
      dispatch(createSuccess(data));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, clientError);
    }
  };

export const getAllClients = () => async (dispatch: AppDispatch) => {
  dispatch(clientRequest());
  try {
    const { data } = await findAllQuery();
    dispatch(getAllSuccess(data));
  } catch (error) {
    console.log(error);
    handlerError(error, dispatch, clientError);
  }
};

export const getClientByID =
  (id: ClientType["id"]) => async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await findOneByIdQuery(id);
      dispatch(getOneSuccess(data));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, clientError);
    }
  };

export const getClientByPhone =
  (phone: ClientType["phone"]) => async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await findOneByPhoneQuery(phone);
      dispatch(getOneSuccess(data));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, clientError);
    }
  };

export const updateClient =
  (id: ClientType["id"], updateClient: UpdateClientType) =>
  async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await updateQuery(id, updateClient);
      dispatch(updateClientSuccess(data));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, clientError);
    }
  };

export const deleteClient =
  (id: ClientType["id"]) => async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await deleteQuery(id);
      dispatch(deleteClientSuccess(data.message));
    } catch (error) {
      console.log(error);
      handlerError(error, dispatch, clientError);
    }
  };
