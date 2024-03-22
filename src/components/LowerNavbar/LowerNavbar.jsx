import React, { useState } from "react";
import { Button, Dropdown, NavLink, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./LowerNavbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { CiLaptop } from "react-icons/ci";
import { PiDeviceMobileLight } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { IoIosFitness } from "react-icons/io";
import { GrGamepad } from "react-icons/gr";
import { LuCable } from "react-icons/lu";
import { BsFileLock } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
const LowerNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="lower-navbar p-0">
        <Container>
          <Dropdown>
            <Button className="toggle-button d-xl-none" onClick={handleShow}>
              <RiMenu3Line />
            </Button>
            <Dropdown.Toggle className="btn-categories py-0">
             <span className="fs-3"><CgMenuLeftAlt /></span> All Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link className="category-link" to="./"><span><CiLaptop /></span> Laptop & Mac</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><PiDeviceMobileLight /></span> Mobile & Tablet</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><LiaHomeSolid /></span> Home & Devices</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><PiTelevisionSimpleThin /></span> TV & Audio</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><IoIosFitness /></span> Fitness</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><GrGamepad /></span> Game & Toys</Link></Dropdown.Item>
              <Dropdown.Item><Link className="category-link" to="./"><span><LuCable /></span> Accessories</Link></Dropdown.Item>
              <Dropdown.Item className="border-0"><Link className="category-link" to="./"><span><BsFileLock /></span> Security</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav className="d-none mx-auto d-xl-flex align-items-xl-center gap-4">
            <Link to="/" className="text-white">
              Home
            </Link>

            <span className="text-white">|</span>

            <Link to="/About" className="text-white">
              About
            </Link>

            <span className="text-white">|</span>

            <Link to="/ShopNow" className="text-white">
              Shop Now
            </Link>

            <span className="text-white">|</span>

            <Link to="/FlashDeals" className="text-white">
              Flash Deals
            </Link>

            <span className="text-white">|</span>

            <Link to="/DailyDeals" className="text-white">
              Daily Deals
            </Link>

            <span className="text-white">|</span>

            <Link to="/Contact" className="text-white">
              Contact
            </Link>
          </Nav>
          <Nav className="d-none d-xl-flex">
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
            <Offcanvas.Body >
              <Nav className="gap-4">
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
