import { httpClient, requestHandler } from "./http";
import { Order, OrderDetailItem, OrderSheet } from "../models/order.model";

export const order = async (orderData: OrderSheet) => {
  return requestHandler<OrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return requestHandler<Order[]>("get", "/orders");
};

export const fetchOrder = async (id: number) => {
  return requestHandler<OrderDetailItem[]>("get", `/orders/:${id}`);
};
