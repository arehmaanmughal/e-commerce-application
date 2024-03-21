import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import NewArrivals from "./Proctucts/NewArrivals";

import "./Products.css";
import Featured from "./Proctucts/Featured";
import TopSelling from "./Proctucts/TopSelling";

const Products = () => {
  
  return (
    <div className="products">
      <Tabs defaultActiveKey="newarrivals" className="pb-1 pt-3">
        <Tab
          eventKey="newarrivals"
          title="New Arrivals"
          className="border-0"
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

export default Products;
