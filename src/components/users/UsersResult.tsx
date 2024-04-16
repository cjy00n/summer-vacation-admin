import { format } from "date-fns";
import User from "../../types/User";
import { ko } from "date-fns/locale";
import { useState } from "react";

interface UsersResultProps {
  users: User[];
}

const UsersResult = ({ users }: UsersResultProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col">
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>유저번호</th>
            <th>닉네임</th>
            <th>카카오ID</th>
            <th>성별</th>
            <th>경고누적</th>
            <th>출생년도</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            ({ id, nickname, kakaoId, gender, waring, birth, createdAt }) => (
              <tr key={"user-list-" + id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{id}</td>
                <td>{nickname}</td>
                <td>{kakaoId}</td>
                <td>{gender}</td>
                <td>{waring}</td>
                <td>{birth}</td>
                <td>
                  {format(createdAt, "yyyy. MM. dd", {
                    locale: ko,
                  })}
                </td>
              </tr>
            )
          )}
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

export default UsersResult;
