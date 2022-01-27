import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allProducts")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
      return (
             <div>
                  <Header/>
          <div className="container">
              <div className='row ' >
              <h1 className="text-primary text-center my-4 fst-italic">Bike Collection</h1>
  
              {products.map((product) => (
          <SingleProduct 
          key={product._id}
          product={product}
          >
  
          </SingleProduct>
        ))}
          </div>
          </div>
             </div>
      );
  };

export default Products;