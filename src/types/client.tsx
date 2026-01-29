import { OrderType } from "./orderType";

export interface ClientType {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  createdAt: string;
  orders: OrderType[];
}

export interface UpdateClientType {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}
