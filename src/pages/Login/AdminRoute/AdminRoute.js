import React from 'react';
import { Spinner } from 'react-bootstrap';
import {  Redirect, Route} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
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
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    
  );
};

export default AdminRoute;