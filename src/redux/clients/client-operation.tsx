import { actions } from "./client-reducer";
import { AppDispatch } from "../store";
import { ClientType } from "../../types/createClient";
import { apiClients } from "../../api/api-clients";

const { createQuery, findAllQuery, findOneQuery, updateQuery, deleteQuery } =
  apiClients;
const {
  createSuccess,
  getAllSuccess,
  getOneSuccess,
  clientRequest,
  clientError,
} = actions;

export const createClient =
  (newClient: ClientType) => async (dispatch: AppDispatch) => {
    dispatch(clientRequest());
    try {
      const { data } = await createQuery(newClient);
      console.log(data);

      dispatch(createSuccess(data));
    } catch (error) {
      clientError(error);
    }
  };

export const getAllClients = () => async (dispatch: AppDispatch) => {
  dispatch(clientRequest());
  try {
    const { data } = await findAllQuery();
    dispatch(getAllSuccess(data));
  } catch (error) {
    clientError(error);
  }
};
