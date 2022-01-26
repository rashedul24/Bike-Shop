import React, { useEffect, useState } from 'react';
import SingleProduct from '../../SingleProduct/SingleProduct';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
        <div className="container">
            <div className='row ' >
            <h1 className="text-primary text-center my-4">Popular Bikes</h1>

            {products.map((product) => (
        <SingleProduct 
        key={product._id}
        product={product}
        >

        </SingleProduct>
      ))}
        </div>
        </div>
    );
};

export default AllProduct;