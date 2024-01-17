import React from "react";
import AppRoutes from "../../routes/AppRoutes";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Header from "../../components/Header";
import MenueItems from "../../components/MenueItems";

const Layout = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);
  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <div style={{ display: "flex" }}>
          <div style={{ width: "20%" }}>
            <MenueItems />
          </div>
          <div style={{ width: "80%" }}>
            <AppRoutes />
          </div>
        </div>
      ) : (
        <AppRoutes />
      )}
    </div>
  );
};

export default Layout;
