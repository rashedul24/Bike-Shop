import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating';

const Feedback = () => {
    const [feedbacks, setFeedbacks]= useState([]);

    useEffect(()=>{
        fetch('https://sheltered-gorge-68070.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
    },[])
    
    return (
        <div className='overflow-hidden'>
            <h1 className="text-primary text-center my-4 fst-italic ">Clients Feedback</h1>

            <div className="row">
            {
                feedbacks.map(feedback=>(<div
                key={feedback._id}
                    className='col-md-4 col-sm-12'

                >
                    <Card className='text-center p-5 m-3 shadow ' >
                    <p>{feedback?.review}</p>
                    
                    <h5><span className='fs-4'>Client name:</span> {feedback?.name}</h5>
                    
                    <RatingView ratingValue={feedback?.rating} />
                    
                    </Card>
                </div>))
            }
            </div>
        </div>
    );
};

export default Feedback;