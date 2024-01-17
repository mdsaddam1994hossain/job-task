import React, { useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';

const SingUp = () => {

    const {isAuthenticated} = useAppSelector((state:RootState)=>state.user)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/sign-up') {
          return isAuthenticated ? navigate('/dashboard') : navigate('/sign-in');
        }
      }, [navigate, location,isAuthenticated]);
    return (
        <div>
            <p>Sign up page</p>
        </div>
    );
};

export default SingUp;