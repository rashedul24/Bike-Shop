import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation,} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className='text-center m-5'>
      <Spinner animation="border" variant="primary"></Spinner>
    </div> 
  }
  return (
    
      user.displayName ? children :
          <Navigate
            to= "/login" replace state={{from: location}}
          ></Navigate>
    
  );
};

export default PrivateRoute;