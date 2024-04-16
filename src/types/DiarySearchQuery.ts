import { ReportUnit } from "./Report";
import { Warning } from "./Warning";

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
