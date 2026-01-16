// api/clients.ts
import axios from "axios";
import { ClientType } from "../types/createClient";

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
  findOneQuery(id: string) {
    return axios.get(`/clients/${id}`);
  },

  /*Обновление клиента по ID*/
  updateQuery(id: string, data: ClientType) {
    return axios.patch(`/clients/${id}`, data);
  },

  /*Удаление клиента по ID*/
  deleteQuery(id: string) {
    return axios.delete(`/clients/${id}`);
  },
};

export { apiClients };
