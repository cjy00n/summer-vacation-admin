export default interface UserSearchQuery {
  nickname: string;
  kakaoId: string;
  gender: "전체" | "남자" | "여자";
  reportNum: number;
  reportUnit: "이상" | "이하" | "동일";
  birthStart: Date | null;
  birthEnd: Date | null;
  signUpDateStart: Date | null;
  signUpDateEnd: Date | null;
}
