import { ClientType, UpdateClientType } from "../types/client";
import $api from "../http";

const apiClients = {
  /*Создание нового клиента*/
  createQuery(data: ClientType) {
    return $api.post("/clients", data);
  },

  /*Получение списка всех клиентов*/
  findAllQuery() {
    return $api.get("/clients");
  },

  /*Получение конкретного клиента по ID*/
  findOneByIdQuery(id: string) {
    return $api.get(`/clients/search/?id=${id}`);
  },

  /*Получение конкретного клиента по ID*/
  findOneByPhoneQuery(phone: string) {
    return $api.get(`/clients/search/?phone=${phone}`);
  },

  /*Обновление клиента по ID*/
  updateQuery(id: ClientType["id"], data: UpdateClientType) {
    return $api.patch(`/clients/${id}`, data);
  },

  /*Удаление клиента по ID*/
  deleteQuery(id: string) {
    return $api.delete(`/clients/${id}`);
  },
};

export { apiClients };
