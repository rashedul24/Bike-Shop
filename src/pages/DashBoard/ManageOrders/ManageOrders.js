import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const permit = window.confirm(
      "Are you sure? Deleted data can not retrieve."
    );
    if (permit) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const rest = orders.filter((order) => order._id !== id);
            setOrders(rest);
          }
        });
    }
  };
  return (
    <div className="text-center">
      <h1 className="mb-5 text-primary fst-italic">Manage Orders</h1>
     <div className="row">
     {orders.map((order) => (
        <div key={order._id}
        className='col-md-4 col-sm-12'
        >
          <Card className="text-center p-5 m-3 shadow ">
          <img className='w-75 ms-4 mb-3' src={order.product.img} alt="" />
          <h3>Product: {order.product.name}</h3>
          <h4>Client: {order.client}</h4>
          <h5>Email: {order.email}</h5>
          <h5>Address: {order.address}</h5>
          <h5>Number: {order.phone}</h5>
          <button
            onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
