import { Grid } from '@mui/material';
import React from 'react';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} >
             <MyOrder/>
        </Grid>
        
    </Grid>
    );
};

export default DashboardHome;