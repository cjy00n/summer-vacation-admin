export default interface User {
  user_id: string;
  user_nickname: string;
  user_kakaoId: string;
  user_gender: "남자" | "여자";
  user_birth: number;
  user_createdAt: Date;
  reportCount: number;
}
