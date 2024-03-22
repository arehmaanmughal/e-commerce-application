import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import "./UpperNavbar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
const UpperNavbar = () => {
  return (
    <div>
      <Container>
        <div className="upper-navbar py-3 d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between align-items-md-center">
          <img className="logo" src="\We-Have-FINAL 1.png"></img>
          <div className="search-bar d-flex justify-content-between align-items-center border rounded-pill ps-3">
            <Dropdown>
              <Dropdown.Toggle className="btn-category px-0">
                All Category <span><MdOutlineKeyboardArrowDown/></span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText className="text-orange fw-bold fs-5">Electronics</Dropdown.ItemText>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Components</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Laptops</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Monitors</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Scanner</Link></Dropdown.Item>

                <Dropdown.ItemText className="text-orange fw-bold fs-5">Furniture</Dropdown.ItemText>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Book Case</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Book Table</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Window Table</Link></Dropdown.Item>

                <Dropdown.ItemText className="text-orange fw-bold fs-5">Accessories</Dropdown.ItemText>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Watches</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Air Pods</Link></Dropdown.Item>
                <Dropdown.Item><Link to="./" className="nav-link ps-3">Handfrees</Link></Dropdown.Item>
                
                
              </Dropdown.Menu>
              
            </Dropdown>
            <span className="divider">|</span>
            <input type="text" className="search-input" placeholder="What you are looking for?"></input>
            <button className="btn-search rounded-pill bg-orange text-white border-0">
              <span className=""><IoIosSearch/></span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
