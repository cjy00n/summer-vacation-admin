import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import LogoutIcon from "../../assets/icons/LogoutIcon";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
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
