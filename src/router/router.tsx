import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout } from "@/common/components/Layout";
import { Login } from "@/components/Login/Login";

export const Router = () => {
  const location = useLocation();
  const { previousLocation } = (location.state ?? {}) as {
    previousLocation?: Location;
  };

  return (
    <>
      <Routes location={previousLocation ?? location}>
        <Route element={<Navigate to={ROUTES.home} />} path={"*"} />
        <Route element={<Layout />}>
          <Route element={<Login />} path={ROUTES.home} />
        </Route>
      </Routes>
    </>
  );
};
