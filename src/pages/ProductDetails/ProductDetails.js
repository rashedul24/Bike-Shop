import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";
import "./ProductDetails.css";

const ProductDetails = () => {
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.product = {
      "name": uniqueProduct.name,
      
      "img": uniqueProduct.img
    }
    console.log(data)
  
    fetch('https://sheltered-gorge-68070.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Order Booked')
          reset()
       }
      });
  };
  const { id } = useParams();
  const [uniqueProduct, setUniqueProduct] = useState({});
  
  useEffect(() => {
    fetch(`https://sheltered-gorge-68070.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setUniqueProduct(data));
  }, [id]);
  return (
    <div className="row d-flex">
        <Header/>
      <h1 className="text-center fw-bold fst-italic fs-2 mt-3">
        Order Product
      </h1>
      <div className="my-2 text-center col-lg-6 shadow ">
        <h4 className="my-5 "> {uniqueProduct?.name} </h4>
        <img className="rounded w-75 mb-4" src={uniqueProduct?.img} alt="" />
        <p className="mx-4">
          <span className="fw-bold fs-5">
            Description:
            <br />
          </span>
          {uniqueProduct?.description}
        </p>
        <h4 className="mb-3">Price: ${uniqueProduct?.price}</h4>
      </div>

      <div className="col-lg-6">
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="ms-5">Client Details</h4>

          <input defaultValue={user.displayName} {...register("client")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input placeholder=" Your Address" {...register("address")} />
          <input placeholder=" Your Number" {...register("phone")} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
