import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail]=useState('');
    const handleOnBlur= e =>{
        setEmail(e.target.value);
    }
    const handleAddAdmin= e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount) {
                alert("Admin Added Successfully");
            }
        })

        e.preventDefault()
    }
    return (
        <div className='text-center'>
             <h1 className="mb-5 text-primary fst-italic">Add an Admin</h1>
             <form onSubmit={handleAddAdmin}>
             <TextField  
             sx={{width : '50%'}}
             label="email" 
             type="email" 
             variant="standard" 
             onBlur={handleOnBlur}
             />
             <Button type='submit' variant='contained'>Add Admin</Button>
             </form>
        </div>
    );
};

export default AddAdmin;