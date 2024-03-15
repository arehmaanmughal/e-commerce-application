import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./NewArrivals.css";
const NewArrivals = () => {
  const [products, setProducts] = useState([
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      imgUrl: "src/assets/images/image 4.png",
    },
  ]);
  return (
    <div className="pt-3">
      <Row className="products-container gy-4">
        {products.map((product, index) => (
          <Col key={index} className=" product-card ">
            <div className="border rounded px-3">
              <div className="d-flex justify-content-center">
                <img className="p-image" src={product.imgUrl} />
              </div>
              <div className="d-flex justify-content-center">
                
                <span className="p-title">{product.title}</span>
                
              </div>
              <div className="d-flex justify-content-between">
                <span className="p-series">{product.series}</span>
                <span className="p-price text-orange">${product.price}</span>
              </div>
              <div>
                <p className="p-description text-center">{product.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewArrivals;
