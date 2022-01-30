import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = rating;
        axios.post('https://sheltered-gorge-68070.herokuapp.com/review', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert(
                        'Thank you for your feedback.'
                        )
                    reset()
                }
            })
    };

    const handleRating = (rate) => {
        setRating(rate)
    }
    return (

        <div className='row text-center'>
            <div className='col-md-9 col-sm-12' >
                <div className='shadow m-5 p-5'>
                        <h2 className="text-primary fst-italic pb-5">Users Feedback</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" {...register("name", { required: true })} value={user?.displayName} /> <br />
                        <textarea className="form-control" {...register("review", { required: true })} placeholder="Your Review" /> <br />
                        <label htmlFor="">Rating</label> <br />
                        <Rating onClick={handleRating} ratingValue={rating} />
                         <br />
                        <input className="btn btn-success  px-5  mt-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;