import React, { FC, ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
  children: ReactNode;
  redirectTo: string;
};

const Protected: FC<Props> = ({ isAuthenticated, children, redirectTo }) => {
  const token = localStorage.getItem("token");
  if(!token){
    return <Navigate to={redirectTo} replace />
}
  
  return(
        <>
         {children}
        </>
    );
};

export default Protected;
