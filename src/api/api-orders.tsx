import { OrderType } from "../types/orderType";
import $api from "../http";

const apiOrders = {
  /*Создание нового клиента*/
  createQuery(data: OrderType) {
    return $api.post("/orders", data);
  },

  /*Получение списка всех заказов*/
  findAllQuery() {
    return $api.get("/orders");
  },

  /*Получение списка всех заказов клиента*/
  findAllByIdClientQuery(id: string) {
    return $api.get(`/orders/client/${id}`);
  },

  /*Получение конкретного заказа по ID*/
  findOneQuery(id: string) {
    return $api.get(`/orders/${id}`);
  },

  /*Обновление заказа по ID*/
  updateQuery(id: OrderType["id"], data: OrderType) {
    return $api.patch(`/orders/${id}`, data);
  },

  /*Удаление заказа по ID*/
  deleteQuery(id: string) {
    return $api.delete(`/orders/${id}`);
  },
};

export { apiOrders };
