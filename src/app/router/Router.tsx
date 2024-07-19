import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { MAIN_ROUTE } from "./consts";
import { authRoutes,publicRoutes } from "./routes";
import { useAppSelector } from "../../shared/hooks";
const AppRouter: React.FC = () => {
  const token = useAppSelector((state) => state.user.token) ||true;//временный доступ

  return (
    <div className="wrapper">
      <Router>

        {/* убрать main */}
        
          <Routes>
          {token && authRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} />
           )}
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
          </Routes>
       
      </Router>
    </div>
  );
};

export default AppRouter;
