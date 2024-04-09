import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import { useGetDiaries } from "../hooks/getDiaries";
import DiariesResult from "../components/Diary/DiaryResult";
import ReportCountSelect from "../components/common/ReportCountSelect";
import WarningOXSelect from "../components/common/WarningOXSelect";

const DiaryPage = () => {
  const [warningUnit, setWarningUnit] = useState<"이상" | "이하" | "동일">(
    "이상"
  );
  const [isWarningUnitOpen, setIsWarningUnitOpen] = useState(false);
  const { data: diariesResult } = useGetDiaries();

  return (
    <div>
      <MainTitle title="검색" />
      <div className="flex flex-col">
        <div className="flex gap-3 h-20 justify-between">
          <div className="flex w-[32vw] justify-between">
            <div className="flex flex-col">
              <TextLabel text="닉네임" />
              <input type="text" className="w-[15vw]" />
            </div>
            <div className="flex flex-col">
              <TextLabel text="카카오 ID" />
              <input type="text" className="w-[15vw]" />
            </div>
          </div>

          <div className="flex w-[32vw] justify-between">
            <div className="flex flex-col">
              <TextLabel text="경고" />
              <WarningOXSelect />
            </div>
            <div className="flex flex-col w-[15vw]">
              <TextLabel text="신고횟수" />
              <ReportCountSelect
                toggleReportUnitOpen={() =>
                  setIsWarningUnitOpen(!isWarningUnitOpen)
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
            <input type="text" className="w-[32vw]" />
          </div>
          <div className="flex flex-col w-[32vw]">
            <TextLabel text="작성일" />
            <div className="flex items-center justify-between">
              <input type="number" className="w-[15vw]" />
              <span>-</span>
              <input type="number" className="w-[15vw]" />
            </div>
            <div className="flex justify-between w-[32vw] my-4">
              <button className="bg-white border border-black border-solid text-black w-[15vw] rounded-sm py-1 text-sm">
                초기화
              </button>
              <span></span>
              <button className="bg-black border border-solid border-black  text-white w-[15vw] rounded-sm py-1 text-sm">
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
