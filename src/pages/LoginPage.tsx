import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="items-center justify-center flex flex-col h-full">
      <h1 className="font-bold mb-32">여름방학 어드민</h1>
      <div className="">
        <div className="flex justify-between my-2">
          <span>아이디</span>
          <input type="text" className="rounded-md w-52 ml-4" />
        </div>
        <div className="flex justify-between my-2">
          <span>비밀번호</span>
          <input type="text" className="rounded-md w-52 ml-4" />
        </div>
        <div className="flex justify-between my-2">
          <span></span>
          <button
            className="bg-gray-50 w-52 ml-4 rounded-md py-1 text-white"
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
