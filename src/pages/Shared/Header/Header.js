import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { faBicycle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const logo = <FontAwesomeIcon icon={faBicycle} />;
  const { user, logOut } = useAuth();
  return (

        <Navbar bg="dark" variant="dark"  collapseOnSelect expand="lg" sticky="top" className="py-4">
          <Container>
        <NavLink to="/" className="text-success text-decoration-none fs-1">{logo } Bike Shop</NavLink>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center fs-5">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
          {user?.email ?
           <Button onClick={logOut} className="me-2" variant="warning">Logout</Button> :
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
              <Navbar.Text>
            Signed in as: <a className="text-decoration-none fst-italic fs-2" href="#login">{user?.displayName} 
            <img className="rounded-circle ms-3" src={user.photoURL} alt="" />
            </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

  );
};

export default Header;
