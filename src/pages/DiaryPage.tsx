import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import { useGetDiaries } from "../api/getDiaries";
import DiariesResult from "../components/Diary/DiaryResult";
import ReportCountSelect from "../components/common/ReportCountSelect";
import WarningOXSelect from "../components/common/WarningOXSelect";
import DiarySearchQuery from "../types/DiarySearchQuery";
import DatePicker from "../components/common/DatePicker";

const DiaryPage = () => {
  const defaultDiarySearchQuery: DiarySearchQuery = {
    nickname: "",
    kakaoId: "",
    warning: "X",
    reportNum: 0,
    reportUnit: "이상",
    content: "",
    postDateStart: new Date("2024-02-16"),
    postDateEnd: new Date(),
  };

  const [diarySearchQuery, setDiarySearchQuery] = useState<DiarySearchQuery>(
    defaultDiarySearchQuery
  );

  const resetDiarySearchQuery = () => {
    setDiarySearchQuery(defaultDiarySearchQuery);
  };

  const updateDiarySearchField = <K extends keyof DiarySearchQuery>(
    field: K,
    value: DiarySearchQuery[K]
  ) => {
    setDiarySearchQuery({ ...diarySearchQuery, [field]: value });
  };

  const [warningUnit, setWarningUnit] = useState<"이상" | "이하" | "동일">(
    "이상"
  );
  const [isWarningUnitOpen, setIsWarningUnitOpen] = useState(false);
  const { data: diariesResult } = useGetDiaries();

  console.log(diarySearchQuery.warning);

  return (
    <div>
      <MainTitle title="검색" />
      <div className="flex flex-col">
        <div className="flex gap-3 h-20 justify-between">
          <div className="flex w-long justify-between">
            <div className="flex flex-col">
              <TextLabel text="닉네임" />
              <input
                type="text"
                className="w-middle"
                value={diarySearchQuery.nickname}
                onChange={(e) =>
                  updateDiarySearchField("nickname", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <TextLabel text="카카오 ID" />
              <input
                type="text"
                className="w-middle"
                value={diarySearchQuery.kakaoId}
                onChange={(e) =>
                  updateDiarySearchField("kakaoId", e.target.value)
                }
              />
            </div>
          </div>

          <div className="flex w-long justify-between">
            <div className="flex flex-col">
              <TextLabel text="경고" />
              <WarningOXSelect
                warning={diarySearchQuery.warning}
                setWarning={(warning) =>
                  updateDiarySearchField("warning", warning)
                }
              />
            </div>
            <div className="flex flex-col w-middle">
              <TextLabel text="신고횟수" />
              <ReportCountSelect
                toggleReportUnitOpen={() =>
                  setIsWarningUnitOpen(!isWarningUnitOpen)
                }
                reportNum={diarySearchQuery.reportNum}
                setReportNum={(reportNum) =>
                  updateDiarySearchField("reportNum", reportNum)
                }
                reportUnit={warningUnit}
                isReportUnitOpen={isWarningUnitOpen}
                setReportUnit={setWarningUnit}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 my-2 h-40 justify-between w-full">
          <div className="flex flex-col">
            <TextLabel text="내용" />
            <input
              type="text"
              className="w-long"
              value={diarySearchQuery.content}
              onChange={(e) =>
                updateDiarySearchField("content", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col w-long">
            <TextLabel text="작성일" />
            <div className="flex items-center justify-between">
              <DatePicker
                selected={diarySearchQuery.postDateStart}
                onChange={(date) =>
                  updateDiarySearchField("postDateStart", date)
                }
              />
              <span>-</span>
              <DatePicker
                selected={diarySearchQuery.postDateEnd}
                onChange={(date) => updateDiarySearchField("postDateEnd", date)}
              />
            </div>
            <div className="flex justify-between w-long my-4">
              <button
                onClick={resetDiarySearchQuery}
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
        {diariesResult && <DiariesResult Diaries={diariesResult} />}
      </div>
    </div>
  );
};
export default DiaryPage;
