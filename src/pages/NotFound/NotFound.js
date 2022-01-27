import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404.png';

const NotFound = () => {
  return (
    <div>
     <Link to="/"> 
     <div className="btn btn-info m-3">Back to home</div>
     </Link>
       <img className='img-fluid' src={notFound} alt="" />
    </div>
  );
};

export default NotFound;