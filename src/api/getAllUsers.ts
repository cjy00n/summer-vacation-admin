import { useQuery } from "react-query";
import { authInstance } from ".";
import User from "../types/User";
import PageMeta from "../types/PageMeta";

export const getAllUsers = async (page: number) => {
  try {
    const response = await authInstance.get<{ data: User[]; meta: PageMeta }>(
      "user/info?page=" + page
    );

    if (response.data) {
      return { data: response.data.data, pageMeta: response.data.meta };
    }
  } catch (e) {
    console.error(e);
  }
};

export function useGetAllUsers(page: number) {
  return useQuery(["getAllUsers" + page], () => getAllUsers(page));
}
