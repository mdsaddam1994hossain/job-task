import React, { useEffect } from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';

const SingIn = () => {
    const {isAuthenticated} = useAppSelector((state:RootState)=>state.user)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/sign-in') {
          return isAuthenticated ? navigate('/dashboard') : navigate('/sign-in');
        }
      }, [navigate, location,isAuthenticated]);
       
    return (
        <div>
            <p>Sign in page</p>
        </div>
    );
};

export default SingIn;