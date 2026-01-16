// api/clients.ts
import axios from "axios";
import { OrderType } from "../types/orderType";

const apiOrders = {
  /*Создание нового клиента*/
  createQuery(data: OrderType) {
    return axios.post("/orders", data);
  },

  /*Получение списка всех клиентов*/
  findAllQuery() {
    return axios.get("/orders");
  },

  /*Получение конкретного клиента по ID*/
  findOneQuery(id: string) {
    return axios.get(`/orders/${id}`);
  },

  /*Обновление клиента по ID*/
  updateQuery(id: string, data: OrderType) {
    return axios.patch(`/orders/${id}`, data);
  },

  /*Удаление клиента по ID*/
  deleteQuery(id: string) {
    return axios.delete(`/orders/${id}`);
  },
};

export { apiOrders };
