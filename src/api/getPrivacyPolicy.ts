import { useQuery } from "react-query";
import { PrivacyPolicy } from "../types/PrivacyPolicy";

export const getPrivacyPolicy = () => {
  const privacyPloicies: PrivacyPolicy[] = [
    {
      id: "1",
      version: 1.0,
      content: "개인정보처리방침",
      date: new Date("2024-03-31"),
    },
    {
      id: "2",
      version: 2.0,
      content: "개인정보처리방침",
      date: new Date("2024-04-03"),
    },
  ];

  return privacyPloicies;
};

export function useGetPrivacyPolicy() {
  return useQuery(["getPrivacyPolicy"], () => getPrivacyPolicy());
}
