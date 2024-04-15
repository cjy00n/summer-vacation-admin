import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE, ROUTE_ARR } from "./routes/Route";
import SideBar from "./components/common/SideBar";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./components/common/Header";

function App() {
  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route
          path={el.path}
          element={
            <div className="flex-col">
              {el.haveHeader === false && el.haveSideBar === false ? (
                <div className="w-full h-dvh">{el.element}</div>
              ) : (
                <>
                  <Header />
                  <div className="flex h-[92dvh]">
                    <SideBar />
                    <div className="w-[75%] mx-auto px-12 py-6">
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
