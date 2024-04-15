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
      title: "이거는 제목이다",
      image:
        "https://picture-diary.cdn.ntruss.com/8fbd50b0-e968-446b-a0ad-53fa5c22eb3f.png",
    },
    {
      id: "2",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      title: "이거는 제목이다",
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: false,
      image:
        "https://picture-diary.cdn.ntruss.com/8fbd50b0-e968-446b-a0ad-53fa5c22eb3f.png",
    },
    {
      id: "3",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      title: "이거는 제목이다",
      reportNum: 0,
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: true,
      image:
        "https://picture-diary.cdn.ntruss.com/8fbd50b0-e968-446b-a0ad-53fa5c22eb3f.png",
    },
    {
      id: "4",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      title: "이거는 제목이다",
      date: new Date(),
      contents:
        "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세",
      warning: true,
      image:
        "https://picture-diary.cdn.ntruss.com/8fbd50b0-e968-446b-a0ad-53fa5c22eb3f.png",
    },
  ];

  return diaries;
};

export function useGetDiaries() {
  return useQuery(["getDiaries"], () => getDiaries());
}
