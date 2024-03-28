import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import { useGetDiaries } from "../hooks/getDiaries";
import DiariesResult from "../components/Diary/DiaryResult";

const DiaryPage = () => {
  const [warningUnit, setWarningUnit] = useState<"이상" | "이하" | "동일">(
    "이상"
  );
  const [isWarningUnitOpen, setIsWarningUnitOpen] = useState(false);

  const { data: diariesResult } = useGetDiaries();

  const toggleWarningUnitOpen = () => {
    setIsWarningUnitOpen(!isWarningUnitOpen);
  };

  const selectWarningUnit = (warningUnit: "이상" | "이하" | "동일") => {
    toggleWarningUnitOpen();
    setWarningUnit(warningUnit);
  };

  return (
    <div>
      <MainTitle title="검색" />
      <div className="flex flex-col">
        <div className="flex gap-3 h-20">
          <div className="flex flex-col">
            <TextLabel text="닉네임" />
            <input type="text" className="w-40" />
          </div>
          <div className="flex flex-col">
            <TextLabel text="카카오 ID" />
            <input type="text" className="w-40" />
          </div>
          <div className="flex flex-col">
            <TextLabel text="경고" />
            <div className="flex items-center w-40 justify-center">
              <form className="flex gap-4 h-8 items-center">
                <div>
                  <input
                    id="gender-all"
                    type="radio"
                    value={"전체"}
                    name="전체"
                    className="mx-1"
                  />
                  <label htmlFor="gender-all">전체</label>
                </div>
                <div>
                  <input
                    id="gender-man"
                    type="radio"
                    value={"X"}
                    name="X"
                    className="mx-1"
                  />
                  <label htmlFor="gender-man">X</label>
                </div>
                <div>
                  <input
                    id="gender-woman"
                    type="radio"
                    value={"O"}
                    name="O"
                    className="mx-1"
                  />
                  <label htmlFor="gender-woman">O</label>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col">
            <TextLabel text="신고횟수" />
            <div className="flex gap-2 items-center">
              <input type="number" className="w-20 h-8" />
              <div className="relative flex flex-col">
                <button
                  onClick={toggleWarningUnitOpen}
                  className="border-solid border-gray-70 border h-8 w-20"
                >
                  {warningUnit} ▼
                </button>
                {isWarningUnitOpen && (
                  <div className="flex absolute flex-col z-10 mt-8 w-20">
                    <button
                      onClick={() => selectWarningUnit("이상")}
                      className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                    >
                      이상 ▼
                    </button>
                    <button
                      onClick={() => selectWarningUnit("이하")}
                      className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                    >
                      이하 ▼
                    </button>
                    <button
                      onClick={() => selectWarningUnit("동일")}
                      className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                    >
                      동일 ▼
                    </button>
                  </div>
                )}
              </div>
              <span>회</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 my-2 h-40">
          <div className="flex flex-col">
            <TextLabel text="내용" />
            <input type="text" className="w-[332px]" />
          </div>
          <div className="flex flex-col">
            <TextLabel text="작성일" />
            <div className="flex items-center">
              <input type="number" className="w-40" />
              <span className="w-3 text-center">-</span>
              <input type="number" className="w-40" />
            </div>
            <div className="flex gap-3 my-4">
              <button className="bg-gray-60 w-40 rounded-sm py-1">
                초기화
              </button>
              <button className="bg-gray-60 w-40 rounded-sm py-1">검색</button>
            </div>
          </div>
        </div>
        {diariesResult && <DiariesResult Diaries={diariesResult} />}
      </div>
    </div>
  );
};
export default DiaryPage;
