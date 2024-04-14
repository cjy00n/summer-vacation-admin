import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../hooks/postLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    postLogin({ email: inputEmail, password: inputPassword, navigate });
  };

  return (
    <div className="items-center justify-center flex flex-col h-full">
      <div className="flex my-2 ">
        <span className="w-[8vw] text-center"></span>
        <h1 className="text-2xl font-bold mb-32 text-centerw-[18vw]">
          여름방학 어드민
        </h1>
      </div>
      <div className="">
        <div className="flex justify-between my-2 items-center">
          <span className="w-[8vw] text-center">아이디</span>
          <input
            type="text"
            className="px-1 rounded-md w-[18vw] h-8 border border-solid border-gray-60"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between my-2 items-center">
          <span className="w-[8vw] text-center">비밀번호</span>
          <input
            type="password"
            className="px-1 rounded-md w-[18vw] h-8 border border-solid border-gray-60"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between my-2">
          <span></span>
          <button
            className="bg-gray-50 w-[18vw] h-8 ml-4 rounded-md py-1 text-white"
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
