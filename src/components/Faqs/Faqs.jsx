import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Faqs.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  const facts = [
    {
      question: "How we work at our brand?",
      answer:
        "You offer a good product, make advertising, analyze the market but still have no improvement Our qualified specialists",
    },
    {
      question: "How we work at our brand?",
      answer:
        "You offer a good product, make advertising, analyze the market but still have no improvement Our qualified specialists",
    },
    {
      question: "How we work at our brand?",
      answer:
        "You offer a good product, make advertising, analyze the market but still have no improvement Our qualified specialists",
    },
    {
      question: "How we work at our brand?",
      answer:
        "You offer a good product, make advertising, analyze the market but still have no improvement Our qualified specialists",
    },
    {
      question: "How we work at our brand?",
      answer:
        "You offer a good product, make advertising, analyze the market but still have no improvement Our qualified specialists",
    },
  ];
  const faqRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faqs-section">
      <Container>
        <div className="faqs-header">
          <p className="faqs-heading">FAQ'S</p>
          <p className="faqs-overview">
            You offer a good product, make advertising, analyze the market but
            still have no improvement Our qualified specialists
          </p>
        </div>

        <div className="faqs d-flex flex-column justify-content-center gap-2">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="faq rounded d-flex justify-content-between"
            >
              <div className="faq-items d-flex align-items-center">
                <p className="faq-number">{index + 1}</p>
                <div className="faq-container">
                  <p className="faq-question">{fact.question}</p>
                  <p
                    className={`faq-answer ${
                      index === activeIndex ? "d-block" : "d-none"
                    }`}
                  >
                    {fact.answer}
                  </p>
                </div>
              </div>
              <div>
                <button
                  ref={(el) => (faqRefs.current[index] = el)}
                  className="faq-btn bg-orange rounded d-flex justify-content-center align-items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {index === activeIndex ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faqs;
