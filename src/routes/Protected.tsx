import React, { FC,ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type Props ={
    isAuthenticated:boolean;
    children :ReactNode;
    redirectTo: string;
}

const Protected :FC<Props> = ({isAuthenticated,children,redirectTo}) => {
    
    if(!isAuthenticated){
        return <Navigate to={redirectTo} replace />
    }

    return(
        <>
         {children}
        </>
    );
};

export default Protected;