import React from 'react';
import war1Logo from '../../assets/logo.svg';
import logo from '../../assets/logo.png'
import './footer.css';

const Footer = () => (
  <div className="war1__footer section__padding">
    <div className="war1__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="war1__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="war1__footer-links">
      <div className="war1__footer-links_logo">
        <img src={war1Logo} alt="war1_logo" />
       <div className="img2"><img src={logo} alt="logo" /></div> 
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="war1__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="war1__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="war1__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>+9112345-67890</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="war1__footer-copyright">
      <p>@2024 WAR-1. All rights reserved.</p>
      
    </div>
  </div>
);

export default Footer;