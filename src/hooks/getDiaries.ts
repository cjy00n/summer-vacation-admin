import { useQuery } from "react-query";
import Diary from "../types/Diary";

export const getDiaries = () => {
  const diaries: Diary[] = [
    {
      id: "1",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: true,
    },
    {
      id: "2",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: false,
    },
    {
      id: "3",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: true,
    },
    {
      id: "4",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: true,
    },
  ];

  return diaries;
};

export function useGetDiaries() {
  return useQuery(["getDiaries"], () => getDiaries());
}
