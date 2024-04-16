export type Gender = "전체" | "남자" | "여자";
export default interface User {
  id: string;
  nickname: string;
  kakaoId: string;
  gender: Gender;
  birth: number;
  createdAt: Date;
  waring: number;
}
