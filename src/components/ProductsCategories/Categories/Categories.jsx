import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      title: "Bags",
      imgurls: ["/image 8.png", "/image 9.png", "/image 10.png"],
    },
    {
      title: "Shoes",
      imgurls: ["/image 11.png", "/image 12.png", "/image 13.png"],
    },
    {
      title: "Wallets",
      imgurls: ["/image 14.png", "/image 15.png", "/image 16.png"],
    },
    {
      title: "Jewellers",
      imgurls: ["/image 17.png", "/image 18.png", "/image 18.png"],
    },
    {
      title: "Watches",
      imgurls: ["/image 19.png", "/image 20.png", "/image 20.png"],
    },
    {
      title: "Sun Glasses",
      imgurls: ["/image 21.png", "/image 22.png", "/image 22.png"],
    },
  ]);
  return (
    <>
    <div className="pt-4">
    <Row className="product-categories gy-4">
        {categories.map((cat, index) => (
          <div className="category" key={index}>
            <div className="border rounded p-3">
              <span className="h6">{cat.title}</span>
              <div className="cat-images pt-3 d-flex justify-content-between">
                {cat.imgurls.map((img, index) => (
                  
                    
                      <img className="cat-img" src={img} key={index}></img>
                    
                  
                ))}
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
      
    </>
  );
};

export default Categories;
