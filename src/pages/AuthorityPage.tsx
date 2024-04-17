import MainTitle from "../components/common/MainTitle";
import { useGetAdmins } from "../api/getAdmins";
import Loading from "../components/Loading";

const AuthorityPage = () => {
  const { data: admins, isLoading: adminsLoading } = useGetAdmins();

  return (
    <div>
      <MainTitle title="권한" />
      <div className="w-full flex flex-col">
        {adminsLoading ? (
          <Loading />
        ) : (
          admins && (
            <table className="table-fixed">
              <thead>
                <tr>
                  <th> </th>
                  <th>#</th>
                  <th>ID</th>
                  <th>비밀번호</th>
                  <th>소유자</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={"faq-category" + admin.id}>
                    <td className="w-8">
                      <input type="checkbox" />
                    </td>
                    <td className="w-12">{admin.id}</td>
                    <td className="">{admin.username}</td>
                    <td>{admin.password}</td>
                    <td>{admin.name}</td>
                    <td className="w-12">
                      <button>수정</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </div>
      <div className="flex justify-between my-3">
        <button className="bg-gray-80 w-[14vw] rounded-md h-8">삭제</button>
        <button className="bg-gray-80 w-[14vw] rounded-md h-8">추가</button>
      </div>
    </div>
  );
};
export default AuthorityPage;
