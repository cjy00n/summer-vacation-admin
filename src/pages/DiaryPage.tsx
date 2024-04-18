import { useEffect, useState } from "react";
import { useGetAllDiaries } from "../api/getAllDiaries";
import { useSearchParams } from "react-router-dom";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import DiariesResult from "../components/Diary/DiaryResult";
import ReportCountSelect from "../components/common/ReportCountSelect";
import WarningOXSelect from "../components/common/WarningOXSelect";
import DiarySearchQuery from "../types/DiarySearchQuery";
import DatePicker from "../components/common/DatePicker";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import Pagination from "../components/common/Pagination";

const DiaryPage = () => {
  /* 페이지 params */
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");

  /* 다이어리 검색 쿼리 기본값 */
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

  /* 다이어리 검색 쿼리 state */
  const [diarySearchQuery, setDiarySearchQuery] = useState<DiarySearchQuery>(
    defaultDiarySearchQuery
  );

  /* 다이어리 검색 쿼리 기본으로 초기화 */
  const resetDiarySearchQuery = () => {
    setDiarySearchQuery(defaultDiarySearchQuery);
  };

  /* 다이어리 검색 쿼리 필드 업데이트 함수 */
  const updateDiarySearchField = <K extends keyof DiarySearchQuery>(
    field: K,
    value: DiarySearchQuery[K]
  ) => {
    setDiarySearchQuery({ ...diarySearchQuery, [field]: value });
  };

  /* 신고횟수 선택 모달 오픈여부 state */
  const [isReportUnitOpen, setIsReportUnitOpen] = useState(false);

  /* 전체 다이어리 데이터 GET */
  const {
    data: diariesResult,
    refetch: diariesRefetch,
    isLoading: diariesLoading,
  } = useGetAllDiaries(currentPage);

  /* 현재 페이지 바뀔 떄마다 refetch */
  useEffect(() => {
    diariesRefetch();
  }, [currentPage, diariesRefetch]);

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
                  setIsReportUnitOpen(!isReportUnitOpen)
                }
                reportNum={diarySearchQuery.reportNum}
                setReportNum={(reportNum) =>
                  updateDiarySearchField("reportNum", reportNum)
                }
                reportUnit={diarySearchQuery.reportUnit}
                isReportUnitOpen={isReportUnitOpen}
                setReportUnit={(reportUnit) =>
                  updateDiarySearchField("reportUnit", reportUnit)
                }
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
        {diariesLoading ? (
          <Loading />
        ) : diariesResult ? (
          <>
            <DiariesResult Diaries={diariesResult.data} />
            <Pagination
              currentPage={currentPage}
              lastPage={diariesResult.pageMeta.last_page}
            />
          </>
        ) : (
          <Warning content="일기 목록이 존재하지 않습니다." />
        )}
      </div>
    </div>
  );
};
export default DiaryPage;
