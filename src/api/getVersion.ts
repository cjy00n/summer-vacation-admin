import { useQuery } from "react-query";
import { Version } from "../types/Version";

export const getVersion = () => {
  const versions: Version[] = [
    {
      id: "1",
      version: 1.0,
      content: "공지내용",
      date: new Date("2024-03-31"),
    },
    {
      id: "2",
      version: 2.0,
      content: "공지내용",
      date: new Date("2024-04-03"),
    },
  ];

  return versions;
};

export function useGetVersion() {
  return useQuery(["getVersion"], () => getVersion());
}
