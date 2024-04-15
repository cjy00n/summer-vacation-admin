import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import { useToast } from "../../hooks/useToast";

const Header = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleLogout = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
    addToast({ type: "default", content: "로그아웃 되었습니다." });
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
