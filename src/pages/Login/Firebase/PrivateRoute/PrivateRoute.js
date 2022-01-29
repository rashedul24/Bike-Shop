import React from 'react';
import { Spinner } from 'react-bootstrap';
import {  Redirect, Route} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className='text-center m-5'>
      <Spinner animation="border" variant="primary"></Spinner>
    </div> 
  }
  if (isLoading) {
    return <div className='text-center m-5'>
      <Spinner animation="border" variant="primary"></Spinner>
    </div> 
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    
  );
};

export default PrivateRoute;