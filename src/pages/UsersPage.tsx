import { useState } from "react";
import { useGetAllUsers } from "../api/getAllUsers";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import GenderSelect from "../components/users/GenderSelect";
import ReportCountSelect from "../components/common/ReportCountSelect";
import UsersResult from "../components/users/UsersResult";
import UserSearchQuery from "../types/UserSearchQuery";
import ReactDatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { useGetUsersByQuery } from "../api/getUsersByQuery";

const UsersPage = () => {
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

  const [userSearchQuery, setUserSearchQuery] = useState<UserSearchQuery>(
    defaultUserSearchQuery
  );

  const resetUserSearchQuery = () => {
    setUserSearchQuery(defaultUserSearchQuery);
  };

  const updateUserSearchField = <K extends keyof UserSearchQuery>(
    field: K,
    value: UserSearchQuery[K]
  ) => {
    setUserSearchQuery({ ...userSearchQuery, [field]: value });
  };

  const [isReportUnitOpen, setIsReportUnitOpen] = useState(false);
  const { data: usersResult } = useGetAllUsers();
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
          <div className="flex w-[32vw] justify-between">
            <div className="flex flex-col">
              <TextLabel text="닉네임" />
              <input
                type="text"
                className="w-[15vw]"
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
                className="w-[15vw]"
                value={userSearchQuery.kakaoId}
                onChange={(e) =>
                  updateUserSearchField("kakaoId", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex w-[32vw] justify-between">
            <div className="flex flex-col">
              <TextLabel text="성별" />
              <div className="flex items-center w-[15vw] ">
                <GenderSelect
                  gender={userSearchQuery.gender}
                  setGender={(gender) =>
                    updateUserSearchField("gender", gender)
                  }
                />
              </div>
            </div>
            <div className="flex flex-col w-[15vw]">
              <TextLabel text="경고누적" />
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  className="w-[6vw] h-8 "
                  value={userSearchQuery.reportNum}
                  onChange={(e) =>
                    updateUserSearchField("reportNum", parseInt(e.target.value))
                  }
                />
                <ReportCountSelect
                  toggleReportUnitOpen={() =>
                    setIsReportUnitOpen(!isReportUnitOpen)
                  }
                  reportUnit={userSearchQuery.reportUnit}
                  isReportUnitOpen={isReportUnitOpen}
                  setReportUnit={(unit) =>
                    updateUserSearchField("reportUnit", unit)
                  }
                />
                <span className="text-center w-[1vw] text-sm">회</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-2 h-40 justify-between w-full">
          <div className="flex flex-col w-[32vw] ">
            <TextLabel text="출생년도" />
            <div className="flex items-center justify-between">
              <ReactDatePicker
                locale={ko}
                selected={userSearchQuery.birthStart}
                onChange={(date) => updateUserSearchField("birthStart", date)}
                showYearPicker
                dateFormat="yyyy"
                yearItemNumber={10}
              />
              <span>-</span>
              <ReactDatePicker
                locale={ko}
                selected={userSearchQuery.birthEnd}
                onChange={(date) => updateUserSearchField("birthEnd", date)}
                showYearPicker
                dateFormat="yyyy"
                yearItemNumber={10}
              />
            </div>
          </div>
          <div className="flex flex-col w-[32vw]">
            <TextLabel text="가입일" />
            <div className="flex items-center justify-between">
              <ReactDatePicker
                locale={ko}
                dateFormat={"yyyy-MM-dd"}
                selected={userSearchQuery.signUpDateStart}
                onChange={(date) =>
                  updateUserSearchField("signUpDateStart", date)
                }
              />
              <span>-</span>
              <ReactDatePicker
                locale={ko}
                dateFormat={"yyyy-MM-dd"}
                selected={userSearchQuery.signUpDateEnd}
                onChange={(date) =>
                  updateUserSearchField("signUpDateEnd", date)
                }
              />
            </div>
            <div className="flex justify-between w-[32vw] my-4">
              <button
                onClick={resetUserSearchQuery}
                className="bg-white border border-black border-solid text-black w-[15vw] rounded-sm py-1 text-sm"
              >
                초기화
              </button>
              <span></span>
              <button
                onClick={searchUsersByQuery}
                className="bg-black border border-solid border-black  text-white w-[15vw] rounded-sm py-1 text-sm"
              >
                검색
              </button>
            </div>
          </div>
        </div>
        {usersResult && <UsersResult users={usersResult} />}
      </div>
    </div>
  );
};

export default UsersPage;
