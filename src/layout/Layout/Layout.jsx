import React from "react";
// import Header from "../Header/Index.jsx"
import Footer from "../Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <div>
        {/* <Header /> */}
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
