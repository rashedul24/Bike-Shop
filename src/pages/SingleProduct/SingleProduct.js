import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const{_id, name, img, description, price}=product;
    return (
        <div className=" col-lg-4 col-md-6 mb-3 ">
    
     <Card className='shadow h-100 text-center'>
     <img src={img} className='m-4 bike-bg' alt="" />
      <h1 className="mt-3">{name}</h1>
      <p>{description}</p>
      <h3>${price}</h3>
      <Link to={`/products/${_id}`}>
        <button className="btn my-3 btn-info">Order Now</button>
      </Link>
     </Card>
    
    </div>
    );
};

export default SingleProduct;