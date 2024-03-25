import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TiTick } from "react-icons/ti";
import './WhyUs.css'
const WhyUs = () => {
  return (
    <>
        <Container>
            <Row className='why-us-section'>
                <Col className=''>
                    <p className='why-us-heading'>Why Us?</p>
                    <p className='why-us-overview'>You offer a good product, make advertising, analyze the market but still have no improvement? Our qulificated specialists are ready to solve any of your problems. We work with the newest techniques and create strategies to catch more customers for you.</p>
                    <div className='d-flex gap-4 align-items-center'>
                        <p className='bg-orange rounded-circle text-white d-flex align-items-center justify-content-center tick-icon'><TiTick/></p>
                        <p className='why-us-reason'>Professional Team</p>
                    </div>
                    <div className='d-flex gap-4 align-items-center'>
                        <p className='bg-orange rounded-circle text-white d-flex align-items-center justify-content-center tick-icon'><TiTick/></p>
                        <p className='why-us-reason'>Affordable Price</p>
                    </div>
                    <div className='d-flex gap-4 align-items-center'>
                        <p className='bg-orange rounded-circle text-white d-flex align-items-center justify-content-center tick-icon'><TiTick/></p>
                        <p className='why-us-reason'>Achieve a Specific Goal</p>
                    </div>
                    
                </Col>
                <Col lg={5}>
                    <div className='numbers-section bg-orange rounded'>
                        <div className='numbers-container d-flex align-items-center ps-4 gap-3 border-bottom'>
                            <img className='numbers-img' src='\About\image 22.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>1000+</p>
                            <p className='our-categories text-white'>Our Categories</p>
                        </div>
                        </div>

                        <div className='numbers-container d-flex align-items-center ps-4 gap-3 border-bottom'>
                            <img className='numbers-img' src='\About\image 23.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>3467+</p>
                            <p className='our-categories text-white'>Our Products</p>
                        </div>
                        </div>

                        <div className='numbers-container d-flex align-items-center ps-4 gap-3'>
                            <img className='numbers-img' src='\About\image 24.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>23,688+</p>
                            <p className='our-categories text-white'>Successful Delivery</p>
                        </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default WhyUs