import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import Diary from "../../types/Diary";

interface DiariesResultProps {
  Diaries: Diary[];
}

const DiariesResult = ({ Diaries }: DiariesResultProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col">
      <table className="table-fixed">
        <thead>
          <tr>
            <th> </th>
            <th>#</th>
            <th>닉네임</th>
            <th>카카오ID</th>
            <th>경고</th>
            <th>신고횟수</th>
            <th>내용</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {Diaries.map((diary) => (
            <tr key={"diary-list-" + diary.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{diary.id}</td>
              <td>{diary.nickname}</td>
              <td>{diary.kakaoId}</td>
              <td>{diary.warning ? "O" : "X"}</td>
              <td>{diary.reportNum}</td>
              <td>
                <div className="truncate w-[20vw] px-1">{diary.contents}</div>
              </td>
              <td>
                {format(diary.date, "yyyy. MM. dd", {
                  locale: ko,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-gray-60 py-1 text-sm rounded-sm my-2 mx-1 w-20">
        삭제
      </button>
      <div className="py-8 gap-5 flex w-2/3 mx-auto justify-center ">
        <button>&lt;&lt;</button>
        <button>&lt;</button>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <button
              key={"users-page-" + i}
              onClick={() => handlePage(i + 1)}
              className={currentPage === i + 1 ? "text-black" : "text-gray-50"}
            >
              {i + 1}
            </button>
          ))}
        <button>&gt;</button>
        <button>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default DiariesResult;
