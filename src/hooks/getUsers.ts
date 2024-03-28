import { useQuery } from "react-query";
import User from "../types/User";

export const getUsers = () => {
  const users: User[] = [
    {
      id: "1",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      gender: "남자",
      reportNum: 0,
      birth: 2000,
      signUpDate: new Date(),
    },
    {
      id: "2",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      gender: "남자",
      reportNum: 0,
      birth: 2000,
      signUpDate: new Date(),
    },
    {
      id: "3",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      gender: "남자",
      reportNum: 0,
      birth: 2000,
      signUpDate: new Date(),
    },
    {
      id: "4",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      gender: "남자",
      reportNum: 0,
      birth: 2000,
      signUpDate: new Date(),
    },
  ];

  return users;
};

export function useGetUsers() {
  return useQuery(["getUsers"], () => getUsers());
}
