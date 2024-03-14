import React, { useState } from "react";
import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewArrivals from "../NewArivals/NewArrivals";
import Featured from "../Featured/Featured";
import TopSelling from "../TopSelling/TopSelling";

const ProductsNavbar = () => {
  const [newArrivals, setNewArrivals] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [topSelling, setTopSelling] = useState(false);
  return (
    <div>
      <Nav className="py-3">
        <NavLink>
          <Link
            to="./"
            onClick={() => {
              setNewArrivals(true);
              setFeatured(false);
              setTopSelling(false);
            }}
          >
            New Arrivals
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="./"
            onClick={() => {
              setNewArrivals(false);
              setFeatured(true);
              setTopSelling(false);
            }}
          >
            Featured
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="./"
            onClick={() => {
              setNewArrivals(false);
              setFeatured(false);
              setTopSelling(true);
            }}
          >
            Top Selling
          </Link>
        </NavLink>
      </Nav>
      {newArrivals ? <NewArrivals /> : null}
      {featured ? <Featured /> : null}
      {topSelling ? <TopSelling /> : null}
    </div>
  );
};

export default ProductsNavbar;
