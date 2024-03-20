import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'
import { PiInstagramLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <div className='border-bottom'>
        <Container className='py-4'>
            <div className='company-details mx-auto'>
              <div className='d-flex justify-content-center'>
                <img src='.\We-Have-FINAL 1.png'></img>
              </div>
              <p className='company-overview'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between'>
                <div className='get-expert-tips'>
                  <p className='get-expert-tips-text-large'>Get Expert Tips In Your Inbox</p>
                  <p className='get-expert-tips-text-small'>Get Expert Tips In Your Inbox</p>
                </div>
                <div className='d-flex justify-content-between border rounded-pill email-bar'>
                  <input type='mail' className='footer-email' placeholder='Enter your mail'></input>
                  <button className='btn-subscribe rounded-pill bg-orange text-white border-0'>Subscribe</button>
                </div>
            </div>

            <Row className='footer-container'>
              <div className='column'>
                <p className='footer-heading'>Social</p>
                <li><Link className='footer-link' to="./"><span><PiInstagramLogoThin/></span> Instagram</Link></li>
                <li><Link className='footer-link' to="./"><span><SlSocialFacebook/></span> Facebook</Link></li>
                <li><Link className='footer-link' to="./"><span><CiTwitter/></span> Twitter</Link></li>
                <li><Link className='footer-link' to="./"><span><CiYoutube/></span> Youtube</Link></li>
              </div>
              <div className='column'>
              <p className='footer-heading'>Contact</p>
              <li>Contact Us</li>
              <li>yourexample@email.com</li>
              <li>example@email.com</li>
              <li>Call us: +1 254 568-5643</li>
              </div>
              <div className='column'>
              <p className='footer-heading'>Our Information</p>
              <li>Privacy policy update</li>
              <li>Terms & conditions</li>
              <li>Site Map</li>
              </div>
              <div className='column'>
              <p className='footer-heading'>About</p>
              <li>About Us</li>
              <li>Customer Support</li>
              <li>Copyright</li>
              </div>
              <div className='column'>
              <p className='footer-heading'>Top Categories</p>
              <li>Men's Wear</li>
              <li>Men's Wear</li>
              <li>Men's Wear</li>
              <li>Men's Wear</li>
              </div>
            </Row>
        </Container>
    </div>
    <div className='py-3'>
      <p className='copyright'>Copyright © 2023 We Have and You HaveAll rights reserved</p>
    </div>
    </>
  )
}

export default Footer