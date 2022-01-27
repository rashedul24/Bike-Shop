import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { handleUserLogin, error, googleSignIn} = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
        handleUserLogin(data.email, data.password)
        .then(result=>{
            navigate(location.state?.from || '/')
        })
    };

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{

            navigate(location.state?.from || '/')
        })
    }

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
                                <input className="form-control" type="email" {...register("email")} placeholder="Email address"  required/> <br />
                                <input className="form-control" type="password" {...register("password")} placeholder="Password" required/> <br />
                                <input className="btn btn-success btn-lg px-5 rounded" type="submit" value="Login" />
                            </form>
                            <p className="text-center pt-3 text-danger">{error}</p>
                            <p className="mt-5 text-center">New User? <Link to="/register">Register here!</Link></p>
                            <h2>Or</h2>
                            <button onClick={handleGoogleLogin}  className='btn btn-primary my-4' >Sign In with Google</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;