import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Product";


const Index = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopnow" element={<Product />} />

      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
