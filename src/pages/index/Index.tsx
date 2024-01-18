import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const Index = () => {
    
    const {isAuthenticated} = useAppSelector((state:RootState)=>state.user)
    const token =localStorage.getItem("token")
    const location = useLocation();
    const navigate = useNavigate();
   
    useEffect(() => {
        if (location.pathname === '/') {
          return isAuthenticated   ? navigate('/dashboard') : navigate('/sign-in');
        }
      }, [navigate, location,isAuthenticated,token]);
    return (
        <div>
            <p>Loading..</p>
        </div>
    );
};

export default Index;