// api/clients.ts
import axios from "axios";
import { ClientType, UpdateClientType } from "../types/client";

const apiClients = {
  /*Создание нового клиента*/
  createQuery(data: ClientType) {
    return axios.post("/clients", data);
  },

  /*Получение списка всех клиентов*/
  findAllQuery() {
    return axios.get("/clients");
  },

  /*Получение конкретного клиента по ID*/
  findOneByIdQuery(id: string) {
    return axios.get(`/clients/search/?id=${id}`);
  },

  /*Получение конкретного клиента по ID*/
  findOneByPhoneQuery(phone: string) {
    return axios.get(`/clients/search/?phone=${phone}`);
  },

  /*Обновление клиента по ID*/
  updateQuery(id: ClientType["id"], data: UpdateClientType) {
    return axios.patch(`/clients/${id}`, data);
  },

  /*Удаление клиента по ID*/
  deleteQuery(id: string) {
    return axios.delete(`/clients/${id}`);
  },
};

export { apiClients };
