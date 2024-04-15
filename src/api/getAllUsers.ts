import { useQuery } from "react-query";
import { authInstance } from ".";
import User from "../types/User";

export const getAllUsers = async () => {
  try {
    const response = await authInstance.get<{ data: User[] }>("user/info");

    if (response.data.data) {
      return response.data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export function useGetAllUsers() {
  return useQuery(["getAllUsers"], () => getAllUsers());
}
