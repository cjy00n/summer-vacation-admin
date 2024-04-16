import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import ReportResult from "../components/Report/ReportResult";
import { useGetAllReports } from "../api/getAllReports";
import ReportCountSelect from "../components/common/ReportCountSelect";
import WarningOXSelect from "../components/common/WarningOXSelect";
import ReportSearchQuery from "../types/ReportSearchQuery";
import DatePicker from "../components/common/DatePicker";
import Warning from "../components/Warning";

const ReportPage = () => {
  const defaultReportSearchQuery: ReportSearchQuery = {
    nickname: "",
    kakaoId: "",
    warning: "X",
    reportNum: 0,
    reportUnit: "이상",
    content: "",
    reportDateStart: new Date("2024-02-16"),
    reportDateEnd: new Date(),
  };

  const [reportSearchQuery, setReportSearchQuery] = useState<ReportSearchQuery>(
    defaultReportSearchQuery
  );

  const resetReportSearchQuery = () => {
    setReportSearchQuery(defaultReportSearchQuery);
  };

  const updateReportSearchField = <K extends keyof ReportSearchQuery>(
    field: K,
    value: ReportSearchQuery[K]
  ) => {
    setReportSearchQuery({ ...reportSearchQuery, [field]: value });
  };

  const [isReportUnitOpen, setIsReportUnitOpen] = useState(false);
  const { data: reportsResult } = useGetAllReports();

  return (
    <div>
      <MainTitle title="신고목록" />
      <div className="flex flex-col w-full">
        <div className="flex h-20 w-full justify-between">
          <div className="flex w-long justify-between">
            <div className="flex flex-col">
              <TextLabel text="닉네임" />
              <input
                type="text"
                className="w-middle"
                value={reportSearchQuery.nickname}
                onChange={(e) =>
                  updateReportSearchField("nickname", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <TextLabel text="카카오 ID" />
              <input
                type="text"
                className="w-middle"
                value={reportSearchQuery.kakaoId}
                onChange={(e) =>
                  updateReportSearchField("kakaoId", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex w-long justify-between">
            <div className="flex flex-col ">
              <TextLabel text="경고" />
              <WarningOXSelect
                warning={reportSearchQuery.warning}
                setWarning={(warning) =>
                  updateReportSearchField("warning", warning)
                }
              />
            </div>
            <div className="flex flex-col w-middle">
              <TextLabel text="신고횟수" />
              <ReportCountSelect
                toggleReportUnitOpen={() =>
                  setIsReportUnitOpen(!isReportUnitOpen)
                }
                reportNum={reportSearchQuery.reportNum}
                setReportNum={(num) =>
                  updateReportSearchField("reportNum", num)
                }
                reportUnit={reportSearchQuery.reportUnit}
                isReportUnitOpen={isReportUnitOpen}
                setReportUnit={(unit) =>
                  updateReportSearchField("reportUnit", unit)
                }
              />
            </div>
          </div>
        </div>
        <div className="flex my-2 h-40 justify-between w-full">
          <div className="flex flex-col ">
            <TextLabel text="내용" />
            <div className="flex items-center">
              <input
                type="text"
                className="w-long"
                value={reportSearchQuery.content}
                onChange={(e) =>
                  updateReportSearchField("content", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col w-long">
            <TextLabel text="작성일" />
            <div className="flex items-center justify-between">
              <DatePicker
                selected={reportSearchQuery.reportDateStart}
                onChange={(date) =>
                  updateReportSearchField("reportDateStart", date)
                }
              />
              <span className="w-full text-center">-</span>
              <DatePicker
                selected={reportSearchQuery.reportDateEnd}
                onChange={(date) =>
                  updateReportSearchField("reportDateEnd", date)
                }
              />
            </div>
            <div className="flex justify-between w-long my-4">
              <button
                onClick={resetReportSearchQuery}
                className="bg-white border border-black border-solid text-black w-middle rounded-sm py-1 text-sm"
              >
                초기화
              </button>
              <span></span>
              <button className="bg-black border border-solid border-black  text-white w-middle rounded-sm py-1 text-sm">
                검색
              </button>
            </div>
          </div>
        </div>
        {reportsResult ? (
          <ReportResult reports={reportsResult} />
        ) : (
          <Warning content="신고 목록이 존재하지 않습니다." />
        )}
      </div>
    </div>
  );
};
export default ReportPage;
