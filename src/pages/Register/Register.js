import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';


const Register = () => {
    const location = useLocation();
    const history = useHistory();

    const { handleUserRegister, error } = useAuth();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newUser = { email: data.email, name: data.name }
        handleUserRegister(data.email, data.password, data.name,location, history) ;
        axios.post('https://sheltered-gorge-68070.herokuapp.com/users', newUser)

    };

    return (
        <div className="pt-2">
            <Header />
            <Container>
                <Row className="pt-3 text-center">
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-4 py-4 mt-5">
                            <div className="text-center pb-5 pt-3">
                                <i className="far fa-edit fs-3"></i>
                                <h1 className=" pt-2 text-primary fst-italic">Please Register</h1>

                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control  input-field"
                                    name="name"
                                    type="text" {...register("name")}
                                    placeholder="Name" required/> <br />
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email" {...register("email")}
                                    placeholder="Email address" required/> <br />
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password" {...register("password")}
                                    placeholder="Password" required /> <br />
                                <input
                                    className="btn btn-success btn-lg px-5"
                                    type="submit"
                                    value="Register" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                            <p className="pt-4 text-center">Already Registered? <Link to="/login">Login</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;