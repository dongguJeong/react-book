import { Category } from "../models/category.model.ts";
import { httpClient } from "./http.ts";

export const fetchCategory = async () => {
  const response = await httpClient.get<Category[]>("/category");
  return response.data;
};
