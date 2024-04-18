import { format } from "date-fns";
import User from "../../types/User";
import { ko } from "date-fns/locale";
import { useState } from "react";
import UsersInfoModal from "./UsersInfoModal";

interface UsersResultProps {
  users: User[];
}

const UsersResult = ({ users }: UsersResultProps) => {
  const [usersInfoOpen, setUsersInfoOpen] = useState(false);
  const [targetUser, setTargetUser] = useState<User>();

  const toggleUsersInfo = () => {
    setUsersInfoOpen(!usersInfoOpen);
  };

  const showUsersInfo = (user: User) => {
    setTargetUser(user);
    toggleUsersInfo();
  };

  console.log(targetUser);
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={"user-list-" + user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.id}</td>
              <td>{user.nickname ?? "-"}</td>
              <td>{user.kakaoId}</td>
              <td>{user.gender ?? "-"}</td>
              <td>{user.waring}회</td>
              <td>{user.birth ?? "-"}</td>
              <td>
                {format(user.createdAt, "yyyy. MM. dd", {
                  locale: ko,
                })}
              </td>
              <td>
                <button
                  className="bg-gray-70 rounded-sm px-1"
                  onClick={() => showUsersInfo(user)}
                >
                  조회
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-gray-60 py-1 text-sm rounded-sm my-2 mx-1 w-20">
        삭제
      </button>
      {targetUser && (
        <UsersInfoModal
          open={usersInfoOpen}
          toggleOpen={toggleUsersInfo}
          user={targetUser}
        />
      )}
    </div>
  );
};

export default UsersResult;
