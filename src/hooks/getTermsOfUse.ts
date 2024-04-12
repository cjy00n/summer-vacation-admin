import { useQuery } from "react-query";
import { TermsOfUse } from "../types/TermsOfUse";

export const getTermsOfUse = () => {
  const tersOfUses: TermsOfUse[] = [
    {
      id: "1",
      version: 1.0,
      content: "이용약관",
      date: new Date("2024-03-31"),
    },
    {
      id: "2",
      version: 2.0,
      content: "이용약관",
      date: new Date("2024-04-03"),
    },
  ];

  return tersOfUses;
};

export function useGetTermsOfUse() {
  return useQuery(["getTermsOfUse"], () => getTermsOfUse());
}
