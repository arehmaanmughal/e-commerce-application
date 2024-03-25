import React from "react";
import Eader from "../Eader/Index.jsx"
import Footer from "../Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <div>
        <Eader />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
