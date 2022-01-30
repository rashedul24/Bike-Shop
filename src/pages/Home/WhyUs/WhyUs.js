import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShoppingBag,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import './WhyUs.css'

const WhyUs = () => {
    const shop = <FontAwesomeIcon icon={faShoppingBag} />;
  const cart = <FontAwesomeIcon icon={faCartPlus} />;
  const shield = <FontAwesomeIcon icon={faUserShield} />;
    return (
        <div className='body'>
            <h1 className='text-success text-center fst-italic my-4'>Why  Us</h1>
            <div className="row us ">
        <div className="col-lg-4 col-sm-12">
          <div className="d-flex p-4">
            <p className="logo">{shop}</p>
            <div>
              <h4>Best Collection</h4>
              <p>
                Here you can find our best resources in a flash. Order
                online, access order
                brochures online.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div className="d-flex p-4">
            <p className="logo ">{shield}</p>
            <div>
              <h4>Trust & Safety</h4>
              <p>
                Safety and security are vital to providing quality in delivery.
                More than any other economic activity, the success or failure of
                a business depends on being able to provide  safe
                and secure on time delivery for customers.
              </p>
            </div>
          </div>
        </div>

         
        <div className="col-lg-4 col-sm-12">
        <div className="d-flex p-4">
            <p className="logo">{cart}</p>
            <div>
              <h4>Fast Booking</h4>
              <p>
                Since all messages are
                dynamically allocated to your orders, you can easily email or
                chat with us, as well as review clients feedback. Customer can payment Online
                or via our mobile app.
              </p>
            </div>
          </div>
        </div>

         

      </div>
        </div>
    );
};

export default WhyUs;