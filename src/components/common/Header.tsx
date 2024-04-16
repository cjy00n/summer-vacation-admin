import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { useToast } from "../../hooks/useToast";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "../../recoil/atom/isLoggedInState";
import LogoutIcon from "../../assets/icons/LogoutIcon";

const Header = () => {
  const navigate = useNavigate();
  const setLoginStatus = useSetRecoilState(isLoggedInState);
  const { addToast } = useToast();

  /* 로그아웃시 로컬스토리지의 액세스 토큰 & 리프레시 토큰 삭제 후 로그인 페이지로 이동 */
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate(ROUTE.LOGIN_PAGE.link);
    setLoginStatus(false);
    addToast({ content: "로그아웃 되었습니다." });
  };

  return (
    <header className="bg-gray-60 px-4 flex justify-between sticky h-[8dvh] my-auto items-center">
      <span className="font-bold text-lg">여름방학 어드민</span>
      <button className="flex gap-2" onClick={handleLogout}>
        로그아웃
        <LogoutIcon />
      </button>
    </header>
  );
};

export default Header;
