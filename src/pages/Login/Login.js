import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Login = () => {
    const { handleUserLogin, error } = useAuth();
    

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        handleUserLogin(data.email, data.password)

    };

    return (
        <div className="pt-2">
            <Header/>
            <Container>
                <Row className="pt-3 text-center">
                    <Col md={2} lg={3}></Col>
                    <Col xs={12} md={8} lg={5}>
                        <div className="shadow px-4 py-4 mt-5">
                            <h1 className="text-center pb-5 pt-3 fst-italic text-primary">
                                Login Here
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" type="email" {...register("email")} placeholder="Email address" /> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Password" /> <br />
                                <input className="btn btn-success btn-lg px-5 rounded" type="submit" value="Login" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                            <p className="mt-5 text-center">New User? <Link to="/register">Register here!</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;