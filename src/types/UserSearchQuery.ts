import { ReportUnit } from "./Report";
import { Gender } from "./User";

export default interface UserSearchQuery {
  nickname: string;
  kakaoId: string;
  gender: Gender;
  reportNum: number;
  reportUnit: ReportUnit;
  birthStart: Date | null;
  birthEnd: Date | null;
  signUpDateStart: Date | null;
  signUpDateEnd: Date | null;
}
