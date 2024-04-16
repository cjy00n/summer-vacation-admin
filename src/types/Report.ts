export type ReportUnit = "이상" | "이하" | "동일";
export interface Report {
  id: string;
  reporter: string;
  reporterKakaoId: string;
  reportSubject: string;
  reportSubjectKakaoId: string;
  reportNum: number;
  feedId: number;
  reason: string;
  date: Date;
}
