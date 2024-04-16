import { ReportUnit } from "./Report";
import { Warning } from "./Warning";

export default interface ReportSearchQuery {
  nickname: string;
  kakaoId: string;
  warning: Warning;
  reportNum: number;
  reportUnit: ReportUnit;
  content: string;
  reportDateStart: Date | null;
  reportDateEnd: Date | null;
}
