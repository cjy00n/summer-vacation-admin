import { useState } from "react";
import { useGetAllUsers } from "../api/getAllUsers";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import GenderSelect from "../components/users/GenderSelect";
import ReportCountSelect from "../components/common/ReportCountSelect";
import UsersResult from "../components/users/UsersResult";
import UserSearchQuery from "../types/UserSearchQuery";
import { useGetUsersByQuery } from "../api/getUsersByQuery";
import DatePicker from "../components/common/DatePicker";
import Warning from "../components/Warning";
import Loading from "../components/Loading";

const UsersPage = () => {
  /* 유저 검색 쿼리 기본값 */
  const defaultUserSearchQuery: UserSearchQuery = {
    nickname: "",
    kakaoId: "",
    gender: "남자",
    reportNum: 0,
    reportUnit: "이상",
    birthEnd: null,
    birthStart: null,
    signUpDateStart: new Date("2024-02-16"),
    signUpDateEnd: new Date(),
  };

  /* 유저 검색 쿼리 state */
  const [userSearchQuery, setUserSearchQuery] = useState<UserSearchQuery>(
    defaultUserSearchQuery
  );

  /* 유저 검색 쿼리 기본으로 초기화 */
  const resetUserSearchQuery = () => {
    setUserSearchQuery(defaultUserSearchQuery);
  };

  /* 유저 검색 쿼리 필드 업데이트 함수 */
  const updateUserSearchField = <K extends keyof UserSearchQuery>(
    field: K,
    value: UserSearchQuery[K]
  ) => {
    setUserSearchQuery({ ...userSearchQuery, [field]: value });
  };

  /* 신고횟수 선택 모달 오픈여부 state */
  const [isReportUnitOpen, setIsReportUnitOpen] = useState(false);
  const { data: usersResult, isLoading: usersLoading } = useGetAllUsers();
  const { data: usersResultByQuery, refetch } =
    useGetUsersByQuery(userSearchQuery);

  const searchUsersByQuery = () => {
    refetch();
    console.log(usersResultByQuery);
  };

  return (
    <div>
      <MainTitle title="검색" />
      <div className="flex flex-col w-full">
        <div className="flex h-20 w-full justify-between">
          <div className="flex w-long justify-between">
            <div className="flex flex-col">
              <TextLabel text="닉네임" />
              <input
                type="text"
                className="w-middle"
                value={userSearchQuery.nickname}
                onChange={(e) =>
                  updateUserSearchField("nickname", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col">
              <TextLabel text="카카오 ID" />
              <input
                type="text"
                className="w-middle"
                value={userSearchQuery.kakaoId}
                onChange={(e) =>
                  updateUserSearchField("kakaoId", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex w-long justify-between">
            <div className="flex flex-col">
              <TextLabel text="성별" />
              <div className="flex items-center w-middle">
                <GenderSelect
                  gender={userSearchQuery.gender}
                  setGender={(gender) =>
                    updateUserSearchField("gender", gender)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col w-middle">
              <TextLabel text="경고누적" />
              <ReportCountSelect
                toggleReportUnitOpen={() =>
                  setIsReportUnitOpen(!isReportUnitOpen)
                }
                reportNum={userSearchQuery.reportNum}
                setReportNum={(reportNum) =>
                  updateUserSearchField("reportNum", reportNum)
                }
                reportUnit={userSearchQuery.reportUnit}
                isReportUnitOpen={isReportUnitOpen}
                setReportUnit={(unit) =>
                  updateUserSearchField("reportUnit", unit)
                }
              />
            </div>
          </div>
        </div>
        <div className="flex my-2 h-40 justify-between w-full">
          <div className="flex flex-col w-long ">
            <TextLabel text="출생년도" />
            <div className="flex items-center justify-between">
              <DatePicker
                type="year"
                selected={userSearchQuery.birthStart}
                onChange={(date) => updateUserSearchField("birthStart", date)}
              />
              <span className="w-full text-center">-</span>
              <DatePicker
                type="year"
                selected={userSearchQuery.birthEnd}
                onChange={(date) => updateUserSearchField("birthEnd", date)}
              />
            </div>
          </div>
          <div className="flex flex-col w-long">
            <TextLabel text="가입일" />
            <div className="flex items-center justify-between">
              <DatePicker
                selected={userSearchQuery.signUpDateStart}
                onChange={(date) =>
                  updateUserSearchField("signUpDateStart", date)
                }
              />
              <span className="w-full text-center">-</span>
              <DatePicker
                selected={userSearchQuery.signUpDateEnd}
                onChange={(date) =>
                  updateUserSearchField("signUpDateEnd", date)
                }
              />
            </div>
            <div className="flex justify-between w-long my-4">
              <button
                onClick={resetUserSearchQuery}
                className="bg-white border border-black border-solid text-black w-middle rounded-sm py-1 text-sm"
              >
                초기화
              </button>
              <span></span>
              <button
                onClick={searchUsersByQuery}
                className="bg-black border border-solid border-black  text-white w-middle rounded-sm py-1 text-sm"
              >
                검색
              </button>
            </div>
          </div>
        </div>
        {usersLoading ? (
          <Loading />
        ) : usersResult ? (
          <UsersResult users={usersResult} />
        ) : (
          <Warning content="회원 목록이 존재하지 않습니다." />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
