import React from "react";
import Slider from "../../components/Slider/Slider";
import { Container } from "react-bootstrap";
import Sale from "../../components/Sale/Sale";
import ProductsNavbar from "../../components/Products/ProductsNavbar";
import CategoriesNavbar from "../../components/ProductsCategories/CategoriesNavbar";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import Reviews from "../../components/Reviews/Reviews";


const Main = () => {
  return (
    <>
      <div className="border-bottom">
      <Container>
        <Slider />
        <Sale />
        <ProductsNavbar/>
        <CategoriesNavbar/>
        <SaleBanner/>
        <Reviews/>
      </Container>
      </div>

    </>
  );
};

export default Main;
