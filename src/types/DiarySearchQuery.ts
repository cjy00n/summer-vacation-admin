import { ReportUnit } from "./Report";

export type Warning = "O" | "X";

export default interface DiarySearchQuery {
  nickname: string;
  kakaoId: string;
  warning: Warning;
  reportNum: number;
  reportUnit: ReportUnit;
  content: string;
  postDateStart: Date | null;
  postDateEnd: Date | null;
}
