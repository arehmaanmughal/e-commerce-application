import React from "react";
import Layout from "../../layout/Layout/Layout";
import Sale from "../../components/Sale/Sale";
import CategoriesNavbar from "../../components/ProductsCategories/CategoriesNavbar";
import SaleBanner from "../../components/SaleBanner/SaleBanner";
import Reviews from "../../components/Reviews/Reviews";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="border-bottom">
          <Container>
            <Hero />
            <Sale />
            <Products />
            <CategoriesNavbar />
            <SaleBanner />
            <Reviews />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Home;
