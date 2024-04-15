import { useQuery } from "react-query";
import Admin from "../types/Admin";

export const getAdmins = () => {
  const admins: Admin[] = [
    {
      id: "1",
      username: "admin@admin.com",
      password: "summer0203!",
      name: "홍길동",
    },
    {
      id: "2",
      username: "admin@admin.com",
      password: "summer0203!",
      name: "홍길동",
    },
  ];

  return admins;
};

export function useGetAdmins() {
  return useQuery(["getAdmins"], () => getAdmins());
}
