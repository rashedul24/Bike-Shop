import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const{user}=useAuth();
  useEffect(() => {
    fetch("https://sheltered-gorge-68070.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data.filter(myOrder=>myOrder.email === user.email))
      });
  }, []);
  const handleDelete = (id) => {
    const permit = window.confirm(
      "Are you sure? Deleted data can not retrieve."
    );
    if (permit) {
      const url = `https://sheltered-gorge-68070.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const rest = myOrders.filter((myOrder) => myOrder._id !== id);
            setMyOrders(rest);
          }
        });
    }
  };
    return (
        <div>
            <h1 className="text-primary text-center my-4 fst-italic">My Orders</h1>
            <div className="row">
            {
                myOrders.map(order=>(<div
                key={order._id}
                    className='col-md-4 col-sm-12'

                >
                    <Card className='text-center p-5 m-3 shadow ' >
                    <h3>{order.product.name}</h3>
                    <img className='w-75 ms-4 mb-3' src={order.product.img} alt="" />
                    <h4>Name: {order.client}</h4>
                    <h5>Email: {order.email}</h5>
                    <p>Address: {order.address}</p>
                    <h6>Number: {order.phone}</h6>
                    <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-danger  m-3"
          >
            Delete
          </button>
                    </Card>
                </div>))
            }
            </div>
            
        </div>
    );
};

export default MyOrder;