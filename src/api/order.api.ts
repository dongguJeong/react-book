import { httpClient } from "./http.ts";
import { Order, OrderDetailItem, OrderSheet } from "../models/order.model.ts";

export const order = async (orderData: OrderSheet) => {
  const response = await httpClient.post("/orders", orderData);
  return response.data;
};

export const fetchOrders = async () => {
  const response = await httpClient.get<Order[]>("/orders");
  return response.data;
};

export const fetchOrder = async (id: number) => {
  const response = await httpClient.get<OrderDetailItem[]>(`/orders/:${id}`);
  return response.data;
};
