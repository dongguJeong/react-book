import { SignUpProps } from "../pages/SignUp.tsx";
import { httpClient } from "./http.ts";

export const signUp = async (userData: SignUpProps) => {
  const response = await httpClient.post("/users/join", userData);
  return response.data;
};

export const resetRequset = async (data: SignUpProps) => {
  const response = await httpClient.post("/users/reset", data);
  return response.data;
};

export const resetPassword = async (data: SignUpProps) => {
  const response = await httpClient.put("/users/reset", data);
  return response.data;
};

interface LoginResponse {
  token: string;
}
export const login = async (data: SignUpProps) => {
  const response = await httpClient.post<LoginResponse>("/users/login", data);
  return response.data;
};
