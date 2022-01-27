import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllProduct from '../AllProduct/AllProduct';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <AllProduct/>
           <Footer/>
        </div>
    );
};

export default Home;