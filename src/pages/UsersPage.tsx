import { useState } from "react";
import MainTitle from "../components/common/MainTitle";
import TextLabel from "../components/common/TextLabel";
import { useGetUsers } from "../hooks/getUsers";
import UsersResult from "../components/users/UsersResult";

const UsersPage = () => {
  const [reportUnit, setReportUnit] = useState<"이상" | "이하" | "동일">(
    "이상"
  );
  const [isReportUnitOpen, setIsReportUnitOpen] = useState(false);

  const { data: usersResult } = useGetUsers();

  const toggleReportUnitOpen = () => {
    setIsReportUnitOpen(!isReportUnitOpen);
  };

  const selectReportUnit = (reportUnit: "이상" | "이하" | "동일") => {
    toggleReportUnitOpen();
    setReportUnit(reportUnit);
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
            <TextLabel text="성별" />
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
                    value={"남자"}
                    name="남자"
                    className="mx-1"
                  />
                  <label htmlFor="gender-man">남</label>
                </div>
                <div>
                  <input
                    id="gender-woman"
                    type="radio"
                    value={"여자"}
                    name="여자"
                    className="mx-1"
                  />
                  <label htmlFor="gender-woman">여</label>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col">
            <TextLabel text="경고누적" />
            <div className="flex gap-2 items-center">
              <input type="number" className="w-20 h-8" />
              <div className="relative flex flex-col">
                <button
                  onClick={toggleReportUnitOpen}
                  className="border-solid border-gray-70 border h-8 w-20"
                >
                  {reportUnit} ▼
                </button>
                {isReportUnitOpen && (
                  <div className="flex absolute flex-col z-10 mt-8 w-20">
                    <button
                      onClick={() => selectReportUnit("이상")}
                      className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                    >
                      이상 ▼
                    </button>
                    <button
                      onClick={() => selectReportUnit("이하")}
                      className="bg-gray-80 border-solid border-gray-70 border h-8 border-t-0"
                    >
                      이하 ▼
                    </button>
                    <button
                      onClick={() => selectReportUnit("동일")}
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
            <TextLabel text="출생년도" />
            <div className="flex items-center">
              <input type="number" className="w-40" />
              <span className="w-3 text-center">-</span>
              <input type="number" className="w-40" />
            </div>
          </div>
          <div className="flex flex-col">
            <TextLabel text="가입일" />
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
        {usersResult && <UsersResult users={usersResult} />}
      </div>
    </div>
  );
};
export default UsersPage;
