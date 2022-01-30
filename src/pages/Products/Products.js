import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://sheltered-gorge-68070.herokuapp.com/allProducts")
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
          <Footer/>
             </div>
      );
  };

export default Products;