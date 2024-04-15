import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../api/postLogin";
import { useToast } from "../hooks/useToast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await postLogin({
        email: inputEmail,
        password: inputPassword,
      });
      if (res) {
        addToast({ content: "로그인에 성공했습니다.", type: "success" });
        navigate("/");
      }
    } catch (e) {
      addToast({
        content: "관리자 정보가 일치하지 않습니다.",
        type: "error",
      });
    }
  };

  return (
    <div className="items-center justify-center flex flex-col h-full">
      <div className="flex flex-col my-2 mx-auto w-[20vw] items-center">
        <img src="logoImg.svg" className="w-[15vw]" />
        <img src="logo.svg" className="w-[15vw]" />
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
          <span className="w-[8vw]"></span>
        </div>
        <div className="flex justify-between my-2 items-center">
          <span className="w-[8vw] text-center">비밀번호</span>
          <input
            type="password"
            className="px-1 rounded-md w-[18vw] h-8 border border-solid border-gray-60"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <span className="w-[8vw]"></span>
        </div>
        <div className="flex justify-between my-2">
          <span className="w-[8vw]"></span>
          <button
            className="bg-gray-50 w-[18vw] h-8 rounded-md py-1 text-white"
            onClick={handleLogin}
          >
            로그인
          </button>
          <span className="w-[8vw]"></span>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
