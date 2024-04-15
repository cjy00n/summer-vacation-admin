import { useQuery } from "react-query";
import Diary from "../types/Diary";

interface getContestProps {
  year: number;
  month: number;
  week: number;
}

export const getContest = ({ year, month, week }: getContestProps) => {
  console.log(year, month, week);

  const diaries: Diary[] = [
    {
      id: "11",
      kakaoId: "aaaaaaaaaaa",
      nickname: "닉네임",
      reportNum: 0,
      date: new Date(),
      contents: "동해물과 백두산이 ",
      warning: true,
      title: "이거는 제목이다",
      image:
        "https://picture-diary.cdn.ntruss.com/8fbd50b0-e968-446b-a0ad-53fa5c22eb3f.png",
    },
    {
      id: "22",
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
      id: "33",
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
  ];

  return diaries;
};

export function useGetContest({ year, month, week }: getContestProps) {
  return useQuery(["getContest"], () => getContest({ year, month, week }));
}
