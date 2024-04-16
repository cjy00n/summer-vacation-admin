import { useQuery } from "react-query";
import { authInstance } from ".";
import User from "../types/User";
import UserSearchQuery from "../types/UserSearchQuery";

export const getUsersByQuery = async ({
  nickname,
  kakaoId,
  gender,
  reportNum,
  reportUnit,
  birthStart,
  birthEnd,
}: // signUpDateStart,
// signUpDateEnd,
UserSearchQuery) => {
  const reportField =
    reportUnit === "동일"
      ? "Equle"
      : reportUnit === "이하"
      ? "LessThanOrEqual"
      : "MoreThanOrEqual";

  try {
    const response = await authInstance.get<{ data: User[] }>(
      `user/findByQueries?${birthStart ? `start=${birthStart}` : ""}${
        birthEnd ? `&end=${birthEnd}` : ""
      }&gender=${gender}${nickname ? `&nickname=${nickname}` : ""}${
        kakaoId ? `&kakaoId=${kakaoId}` : ""
      }&waring=${reportNum}&filed=${reportField}`
    );

    if (response.data.data) {
      return response.data.data;
    }
  } catch (e) {
    console.error(e);
  }
};

export function useGetUsersByQuery(queries: UserSearchQuery) {
  return useQuery(["getUsers", queries], () => getUsersByQuery(queries));
}
