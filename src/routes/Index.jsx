import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NewArrivals from "../components/NewArivals/NewArrivals";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NewArrivals" element={<Home />} />
          </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Index;
