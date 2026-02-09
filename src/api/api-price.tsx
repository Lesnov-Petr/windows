// api/clients.ts
import axios from "axios";
import { PriceType } from "../types/price";

const apiPrice = {
  /*Создание price*/
  createQuery(data: PriceType) {
    return axios.post("/price", data, {
      headers: {
        "Content-Type": "multipart/form-data", // Axios сам добавит boundary
      },
    });
  },

  /*Получение prices*/
  findAllQuery() {
    return axios.get("/price");
  },

  /*Получение конкретного price по ID*/
  findOneQuery(id: string) {
    return axios.get(`/price/${id}`);
  },

  /*Обновление price по ID*/
  updateQuery(id: PriceType["id"], data: PriceType) {
    return axios.patch(`/price/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data", // Axios сам добавит boundary
      },
    });
  },

  /*Удаление price по ID*/
  deleteQuery(id: string) {
    return axios.delete(`/price/${id}`);
  },
};

export { apiPrice };
