import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import './UpperNavbar.css'

const UpperNavbar = () => {
  return (
    <div>
      <Container>
        <div className="upper-navbar py-3 d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between align-items-lg-center">
          <img className="logo" src="public\We-Have-FINAL 1.png"></img>
          <SearchBar />
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
