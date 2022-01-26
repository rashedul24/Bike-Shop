import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUsingGoogle } = useAuth();
  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
       navigate(location.state?.from || '/')
    });
  }
  return (
    <div  className='text-center'>
            <h1 >Please Login</h1>
            <button onClick={handleGoogleLogin}  className='btn btn-primary my-4' >Sign In with Google</button>
        </div>
  );
};

export default Login;