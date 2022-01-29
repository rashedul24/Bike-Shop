import { Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const{user}=useAuth();
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} >
            <div>
            <h1 className='text-center text-primary fst-italic'>Welcome to {user.displayName}'s Dashboard !</h1>
            </div>
        </Grid>
        
    </Grid>
    );
};

export default DashboardHome;