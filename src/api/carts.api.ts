import { Cart } from "../models/cart.model.ts";
import { httpClient } from "./http.ts";

interface Props {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: Props) => {
  const response = await httpClient.post("/carts", params);
  return response.data;
};

export const fetchCart = async () => {
  const response = await httpClient.get<Cart[]>("/carts");
  return response.data;
};

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete(`/carts/${cartId}`);
  return response.data;
};
