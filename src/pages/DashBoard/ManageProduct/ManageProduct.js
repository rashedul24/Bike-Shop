import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-gorge-68070.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    const permit = window.confirm(
      "Are you sure? Deleted data can not retrieve."
    );
    if (permit) {
      const url = `https://sheltered-gorge-68070.herokuapp.com/allProducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const rest = products.filter((product) => product._id !== id);
            setProducts(rest);
          }
        });
    }
  };
  return (
    <div className="text-center">
      <h1 className="mb-5 text-primary fst-italic">Manage Products</h1>
     <div className="row">
     {products.map((product) => (
        <div key={product._id}
        className='col-md-4 col-sm-12'
        >
          <Card className="text-center p-5 m-3 shadow ">
          <img className='w-75 ms-4 mb-3' src={product.img} alt="" />
          <h3><span className="fw-bold">Product</span>: {product.name}</h3>
          <p><span className="fw-bold fs-4">Description</span>: {product.description}</p>
          <h3>Price: $ {product.price}</h3>
          <button
            onClick={() => handleDelete(product._id)}
            className="btn btn-danger px-3 m-3"
          >
            Delete
          </button>
          </Card>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ManageProduct;
