import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const Index = () => {
    
    const {isAuthenticated} = useAppSelector((state:RootState)=>state.user)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
          return isAuthenticated ? navigate('/dashboard') : navigate('/sign-in');
        }
      }, [navigate, location,isAuthenticated]);
    return (
        <div>
            <p>Loading..</p>
        </div>
    );
};

export default Index;