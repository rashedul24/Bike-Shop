import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllProduct from '../AllProduct/AllProduct';
import Banner from '../Banner/Banner';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <AllProduct/>
           <WhyUs/>
           <Footer/>
        </div>
    );
};

export default Home;