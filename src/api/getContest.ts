import { useQuery } from "react-query";
import Diary from "../types/Diary";
import { ContestPeriod } from "../types/ContestPeriod";

export const getContest = ({ year, month, week }: ContestPeriod) => {
  console.log(year, month, week);

  const diaries: Diary[] = [];

  return diaries;
};

export function useGetContest({ year, month, week }: ContestPeriod) {
  return useQuery(["getContest"], () => getContest({ year, month, week }));
}
