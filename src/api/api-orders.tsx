// api/clients.ts
import axios from "axios";
import { OrderType } from "../types/orderType";

const apiOrders = {
  /*Создание нового клиента*/
  createQuery(data: OrderType) {
    return axios.post("/orders", data);
  },

  /*Получение списка всех заказов*/
  findAllQuery() {
    return axios.get("/orders");
  },

  /*Получение списка всех заказов клиента*/
  findAllByIdClientQuery(id: string) {
    return axios.get(`/orders/client/${id}`);
  },

  /*Получение конкретного заказа по ID*/
  findOneQuery(id: string) {
    return axios.get(`/orders/${id}`);
  },

  /*Обновление заказа по ID*/
  updateQuery(id: OrderType["id"], data: OrderType) {
    return axios.patch(`/orders/${id}`, data);
  },

  /*Удаление заказа по ID*/
  deleteQuery(id: string) {
    return axios.delete(`/orders/${id}`);
  },
};

export { apiOrders };
