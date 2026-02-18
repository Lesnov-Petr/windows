import { PriceType } from "../types/price";
import $api from "../http";

const apiPrice = {
  /*Создание price*/
  createQuery(data: PriceType) {
    return $api.post("/price", data, {
      headers: {
        "Content-Type": "multipart/form-data", // $api сам добавит boundary
      },
    });
  },

  /*Получение prices*/
  findAllQuery() {
    return $api.get("/price");
  },

  /*Получение конкретного price по ID*/
  findOneQuery(id: string) {
    return $api.get(`/price/${id}`);
  },

  /*Обновление price по ID*/
  updateQuery(id: PriceType["id"], data: PriceType) {
    return $api.patch(`/price/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data", // $api сам добавит boundary
      },
    });
  },

  /*Удаление price по ID*/
  deleteQuery(id: string) {
    return $api.delete(`/price/${id}`);
  },
};

export { apiPrice };
