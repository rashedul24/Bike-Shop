import React from 'react';
import Header from '../../Shared/Header/Header';
import AllProduct from '../AllProduct/AllProduct';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <AllProduct/>
        </div>
    );
};

export default Home;