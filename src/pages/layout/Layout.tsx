import React, { useEffect } from "react";
import AppRoutes from "../../routes/AppRoutes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Header from "../../components/Header";
import MenueItems from "../../components/MenueItems";
import { setLogin } from "../../redux/reducer/userSlice";

const Layout = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch()
  const token =localStorage.getItem("token")

   useEffect(()=>{
     if(token){
       dispatch(setLogin())
     }
   },[token])
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
