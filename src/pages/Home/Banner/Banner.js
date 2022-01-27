import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../../Images/bicycle-banner.jpg';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner-bg">
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <div className="text-center">
                            <h1 className="banner-title">Electronic Wheeler</h1>
                            <p className="fs-3">A Machine, That Boost Up Your Daily Life</p>
           <NavLink to="/allProducts">
           <Button className='fst-italic fs-4'>Shop Now</Button>
           </NavLink>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default Banner;