import { format } from "date-fns";
import User from "../../types/User";
import { ko } from "date-fns/locale";

interface UsersResultProps {
  users: User[];
}

const UsersResult = ({ users }: UsersResultProps) => {
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
            <th>경고횟수</th>
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
                <td>{nickname ?? "-"}</td>
                <td>{kakaoId}</td>
                <td>{gender ?? "-"}</td>
                <td>{waring}회</td>
                <td>{birth ?? "-"}</td>
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
    </div>
  );
};

export default UsersResult;
