import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Diary from "../../types/Diary";

interface DiariesResultProps {
  Diaries: Diary[];
}

const DiariesResult = ({ Diaries }: DiariesResultProps) => {
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
              <td>{diary.user.nickname ?? "-"}</td>
              <td>{diary.user.kakaoId}</td>
              <td>{diary.warning ? "O" : "X"}</td>
              <td>{diary.waringCount ?? 0}회</td>
              <td>
                <div className="truncate w-[20vw] px-1 text-left">
                  {diary.contents}
                </div>
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
    </div>
  );
};

export default DiariesResult;
