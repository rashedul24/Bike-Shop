import React from 'react';
import Feedback from '../../Feedback/Feedback';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProduct/HomeProduct';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
           <HomeProduct/>
           <Feedback/>
           <WhyUs/>
           <Footer/>
        </div>
    );
};

export default Home;