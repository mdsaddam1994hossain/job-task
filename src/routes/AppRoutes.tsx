import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/index/Index";
import SingIn from "../pages/auth/signIn/SingIn";
import SingUp from "../pages/auth/signUp/SingUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import ErrorPage from "../pages/Error";
import Protected from "./Protected";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";


const AppRoutes = () => {

  const {isAuthenticated} = useAppSelector((state:RootState)=>state.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/dashboard" element={<Protected isAuthenticated={isAuthenticated} redirectTo="/sign-in" > <Dashboard /> </Protected>} /> 
        <Route path="/users" element={<Protected isAuthenticated={isAuthenticated} redirectTo="/sign-in" > <Users /> </Protected>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
