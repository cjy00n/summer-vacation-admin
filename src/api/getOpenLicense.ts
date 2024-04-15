import { useQuery } from "react-query";

export const getOpenLicense = () => {
  const openLicense = "오픈 라이선스 내용입니다.";

  return openLicense;
};

export function useGetOpenLicense() {
  return useQuery(["getOpenLicense"], () => getOpenLicense());
}
