import React, { useState } from "react";
import { Button, Dropdown, NavLink, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./LowerNavbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
const LowerNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="lower-navbar p-0">
        <Container>
          <Dropdown>
            <Button className="primary d-xl-none" onClick={handleShow}>
              <RiMenu3Line />
            </Button>
            <Dropdown.Toggle className="btn-category">
              All Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="d-none mx-auto d-xl-flex align-items-xl-center ">
            <Link to="/" className="text-white pe-3">
              Home
            </Link>

            <span className="text-white">|</span>

            <Link to="/About" className="text-white px-3">
              About
            </Link>

            <span className="text-white">|</span>

            <Link to="/ShopNow" className="text-white px-3">
              Shop Now
            </Link>

            <span className="text-white">|</span>

            <Link to="/FlashDeals" className="text-white px-3">
              Flash Deals
            </Link>

            <span className="text-white">|</span>

            <Link to="/DailyDeals" className="text-white px-3">
              Daily Deals
            </Link>

            <span className="text-white">|</span>

            <Link to="/Contact" className="text-white ps-3">
              Contact
            </Link>
          </Nav>
          <Nav className="d-none d-sm-flex">
            <Link to="/Signup" className="text-white pe-3 py-1">
              Create an account?
            </Link>

            <button className="btn-login rounded-pill px-3 py-1 border-0">
              <Link to="/Login" className="text-white">
                Login Account
              </Link>
            </button>
          </Nav>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <NavLink>
                  <Link to="/" className="text-dark">
                    Home
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/About" className="text-dark">
                    About
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/ShopNow" className="text-dark">
                    Shop Now
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/FlashDeals" className="text-dark">
                    Flash Deals
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/DailyDeals" className="text-dark">
                    Daily Deals
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/Contact" className="text-dark">
                    Contact
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/Signup" className="text-dark">
                    Create an account?
                  </Link>
                </NavLink>
                <Button className="btn-login rounded-pill">
                  <Link to="/Login" className="text-white">
                    Login Account
                  </Link>
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default LowerNavbar;
