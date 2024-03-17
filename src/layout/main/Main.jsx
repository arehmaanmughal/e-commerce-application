import React from "react";
import Slider from "../../components/Slider/Slider";
import { Container } from "react-bootstrap";
import Sale from "../../components/Sale/Sale";
import ProductsNavbar from "../../components/Products/ProductsNavbar";


const Main = () => {
  return (
    <>
      <Container>
        <Slider />
        <Sale />
        <ProductsNavbar/>
      </Container>
    </>
  );
};

export default Main;
