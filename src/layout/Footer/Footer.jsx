import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <Container className='pt-3'>
            <div className='company-details mx-auto'>
              <div className='d-flex justify-content-center'>
                <img src='.\We-Have-FINAL 1.png'></img>
              </div>
              <p className='company-overview'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            </div>
            {/* <div className='d-flex flex-column justify-content-center flex-md-row justify-content-between'>
                <ul className='px-0 py-0 my-1 lh-3'>
                  <li className='get-expert-tips-text-large'>Get Expert Tips In Your Inbox</li>
                  <li className='get-expert-tips-text-small'>Get Expert Tips In Your Inbox</li>
                </ul>
                <div className='d-flex justify-content-between border rounded-pill ps-4 py-3 email-bar'>
                  <input type='mail' className='footer-email' placeholder='Enter your mail'></input>
                  <button className='rounded-pill py-3  px-3 bg-orange text-white border-0'>Subscribe</button>
                </div>
            </div> */}
        </Container>
    </>
  )
}

export default Footer