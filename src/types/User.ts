export default interface User {
  id: string;
  nickname: string;
  kakaoId: string;
  reportNum: number;
  gender: "남자" | "여자";
  birth: number;
  signUpDate: Date;
}
