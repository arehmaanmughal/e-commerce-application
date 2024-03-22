import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TiTick } from "react-icons/ti";
import './WhyUs.css'
const WhyUs = () => {
  return (
    <>
        <Container className='py-5'>
            <Row>
                <Col>
                    <p className='why-us-heading'>Why Us?</p>
                    <p className='why-us-overview'>You offer a good product, make advertising, analyze the market but still have no improvement? Our qulificated specialists are ready to solve any of your problems. We work with the newest techniques and create strategies to catch more customers for you.</p>
                    <div className='d-flex gap-4'>
                        <p className='bg-orange rounded-circle text-white d-flex align-items-center justify-content-center p-2 fs-5'><TiTick/></p>
                        <p className='why-us-reason'>Professional Team</p>
                    </div>
                    <p className='why-us-reason'><span className='bg-orange rounded-circle text-white tick-icon'><TiTick/></span> Affordable Price</p>
                    <p className='why-us-reason'><span className='bg-orange rounded-circle text-white tick-icon'><TiTick/></span> Achieve a Specific Goal</p>
                </Col>
                <Col>
                    <div className='bg-orange ps-3 py-3 rounded'>
                        <div className='d-flex align-items-center gap-3'>
                            <img src='\About\image 22.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>1000+</p>
                            <p className='our-categories text-white'>Our Categories</p>
                        </div>
                        </div>

                        <div className='d-flex align-items-center gap-3'>
                            <img src='\About\image 23.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>1000+</p>
                            <p className='our-categories text-white'>Our Categories</p>
                        </div>
                        </div>

                        <div className='d-flex align-items-center gap-3'>
                            <img src='\About\image 24.png' alt='image'></img>
                            <div>
                            <p className='no-of-categories text-white'>1000+</p>
                            <p className='our-categories text-white'>Our Categories</p>
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