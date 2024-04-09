import { useQuery } from "react-query";
import { Report } from "../types/Report";

export const getReports = () => {
  const reports: Report[] = [
    {
      id: "1",
      reporter: "신고자",
      reporterKakaoId: "aaa",
      reportSubject: "닉네임",
      reportSubjectKakaoId: "aaa",
      reportNum: 0,
      date: new Date(),
      feedId: 0,
      reason: "맘에안들어요.맘에안들어요.맘에안들어요.맘에안들어요",
    },
  ];

  return reports;
};

export function useGetReports() {
  return useQuery(["getReports"], () => getReports());
}
