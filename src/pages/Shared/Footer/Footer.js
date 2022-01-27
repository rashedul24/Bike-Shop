import { faCopyright, faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    // fontawesome icon
 const copyRight = <FontAwesomeIcon icon={faCopyright} />;
 const home = <FontAwesomeIcon icon={faHome} />;
 const mail = <FontAwesomeIcon icon={faMailBulk} />;
 const phone = <FontAwesomeIcon icon={faPhone} />;
    return (
        <div className="bg-dark text-white py-5 text-center">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h3 className="mb-4">Services</h3>
                        <div className="text-light opacity-75 pt-2">
                            <p className="lh-1">Bike repair</p>
                            <p className="lh-1">Free return</p>
                            <p className="lh-1">Member discount</p>
                            <p className="lh-1">24/7 Support</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 className="mb-4">Useful Links</h3>
                        <div className="text-light opacity-75 pt-2">
                            <p className="lh-1">About</p>
                            <p className="lh-1">Products</p>
                            <p className="lh-1">Shipping Rate</p>
                            <p className="lh-1">Help</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 className="mb-4">Contacts</h3>
                        <div className="text-light opacity-75 pt-2">
                            <p className="lh-1">{home} Dhaka, Bangladesh
                            </p>
                            <p className="lh-1">{mail} bike@shop.com
                            </p>
                            <p className="lh-1">{phone} +880 1717 000 777
                            </p>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-5" />
                <p className='mt-2'>Copyright {copyRight} Bike Shop 2022. All Rights Reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;