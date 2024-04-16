import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import SideBar from "./components/common/SideBar";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./components/common/Header";
import ToastMessageContainer from "./components/common/ToastMessageContainer";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        {ROUTE_ARR.map((el) => (
          <Route
            path={el.path}
            element={
              <div className="flex-col">
                <ToastMessageContainer />
                {el.haveHeader === false && el.haveSideBar === false ? (
                  <div className="w-full h-dvh">{el.element}</div>
                ) : (
                  <>
                    <Header />
                    <div className="flex h-[92dvh]">
                      <SideBar />
                      <div className="w-[calc(100%-13rem)] mx-auto py-6 overflow-y-auto px-[7vw]">
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
    </RecoilRoot>
  );
}

export default App;
