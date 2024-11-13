import { SignUpProps } from "../pages/SignUp.tsx";
import { httpClient } from "./http.ts";

export const signUp = async (userData: SignUpProps) => {
  const response = await httpClient.post("/users/join", userData);
  return response.data;
};
