import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import './UpperNavbar.css'

const UpperNavbar = () => {
  return (
    <div>
      <Container>
        <div className="small d-flex justify-content-between py-3 align-items-center">
          <img src="src\assets\images\We-Have-FINAL 1.png"></img>
          <SearchBar />
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
