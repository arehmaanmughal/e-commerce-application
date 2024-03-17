import React, { useState } from "react";
import { Nav, NavLink, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewArrivals from "../NewArivals/NewArrivals";
import Featured from "../Featured/Featured";
import TopSelling from "../TopSelling/TopSelling";
import "./ProductsNavbar.css";

const ProductsNavbar = () => {
  
  return (
    <div>
      <Tabs defaultActiveKey="newarrivals" className="pb-1 pt-3">
        <Tab
          eventKey="newarrivals"
          title="New Arrivals"
          style={{border:'none'}}
        >
          <NewArrivals />
        </Tab>
        <Tab eventKey="featured" title="Featured">
          <Featured />
        </Tab>
        <Tab eventKey="topselling" title="Top Selling">
          <TopSelling />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductsNavbar;
