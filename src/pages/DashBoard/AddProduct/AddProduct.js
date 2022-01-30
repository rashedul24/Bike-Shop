import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';



const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)

     axios.post('https://sheltered-gorge-68070.herokuapp.com/products', data)
      .then(res => {
        if (res.data.insertedId) {
           alert('Product added successfully')
           reset();
       }
     })
  };
  return (
    <div className='add-product mt-3'>
      <h1 className='add-product mb-5 text-center text-primary fst-italic'>Add Product Here</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 70 })} placeholder=' Product Name' />
      <textarea {...register("description")} placeholder=' Description'/>
      <input {...register("img")}  placeholder=' Image URL'/>
      <input {...register("price")}  placeholder=' Product Price'/>
      <input type="submit"/>
    </form>
    </div>
  );
};

export default AddProduct;