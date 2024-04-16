import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "./recoil/atom/isLoggedInState";
import { useEffect } from "react";
import { useToast } from "./hooks/useToast";
import SideBar from "./components/common/SideBar/SideBar";
import Header from "./components/common/Header";
import ToastMessageContainer from "./components/common/Toast/ToastMessageContainer";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const { addToast } = useToast();
  const setLoginStatus = useSetRecoilState(isLoggedInState);

  const navigate = useNavigate();

  const linkToLoginPage = () => {
    navigate(ROUTE.LOGIN_PAGE.link);
  };

  const currentRoute = ROUTE_ARR.find(
    (route) => route.path === location.pathname
  );

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (currentRoute?.authRequired !== false) {
      if (accessToken && refreshToken) {
        // 토큰 유효 여부 확인 api 추가 필요
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
        linkToLoginPage();
        addToast({ content: "로그인이 필요합니다.", type: "error" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    accessToken,
    addToast,
    currentRoute?.authRequired,
    refreshToken,
    setLoginStatus,
  ]);

  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route
          path={el.path}
          element={
            <div className="flex-col overflow-y-hidden">
              <ToastMessageContainer />
              {el.haveHeader === false && el.haveSideBar === false ? (
                <div className="w-full h-dvh">{el.element}</div>
              ) : (
                <>
                  <Header />
                  <div className="flex h-[92dvh]">
                    <SideBar />
                    <div className="w-[calc(100%-15vw)] mx-auto py-6 overflow-y-auto px-[7vw]">
                      {el.element}
                    </div>
                  </div>
                </>
              )}
            </div>
          }
          key={el.path}
        />
      ))}
      <Route
        path="/"
        element={<Navigate replace to={ROUTE.USERS_PAGE.link} />}
      />
    </Routes>
  );
}

export default App;
