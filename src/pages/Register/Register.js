import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../Shared/Header/Header';


const Register = () => {

    const { handleUserRegister, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newUser = { email: data.email, name: data.name }
        handleUserRegister(data.email, data.password, data.name, location, navigate);
        axios.post('', newUser)
.then(result=>{
    navigate(location.state?.from || '/')
})
    };

    return (
        <div className="pt-2">
            <Header />
            <Container>
                <Row className="pt-3">
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-4 py-4 mt-5">
                            <div className="text-center pb-5 pt-3">
                                <i className="far fa-edit fs-3"></i>
                                <h4 className="text-uppercase fw-normal pt-2">Register</h4>

                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control  input-field"
                                    name="name"
                                    type="text" {...register("name")}
                                    placeholder="Name" /> <br />
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email" {...register("email")}
                                    placeholder="Email address" /> <br />
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password" {...register("password")}
                                    placeholder="Password" /> <br />
                                <input
                                    className="btn btn-success btn-lg px-5 rounded-pill form-control"
                                    type="submit"
                                    value="Register" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                            <p className="pt-4 text-center">I have Already Account. Please, <Link to="/login">Login</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;