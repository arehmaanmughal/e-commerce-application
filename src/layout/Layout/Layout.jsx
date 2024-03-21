import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
const Layout = (props) => {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
