export default interface UserSearchQuery {
  nickname: string;
  kakaoId: string;
  gender: "전체" | "남성" | "여성";
  reportNum: number;
  reportUnit: "이상" | "이하" | "동일";
  birthStart: Date | null;
  birthEnd: Date | null;
  signUpDateStart: Date | null;
  signUpDateEnd: Date | null;
}
