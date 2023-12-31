// TopInfo.js
import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './TopInfo.css';

const TopInfo = () => {
  return (
    <section className="top-info">
      
      <div className="header-social-container">
        <a href="#" className="social-link">
          <FaFacebookSquare />
        </a>
        <a href="#" className="social-link">
          <FaTwitterSquare />
        </a>
        <a href="#" className="social-link">
          <FaInstagram />
        </a>
        <a href="#" className="social-link">
          <FaLinkedin />
        </a>
      </div>

      <div class="shipping-text">
        Free Shipping This Week Order Over 55€
      </div>
      <div>
        <select>
          <option value="en" selected>English</option>
          <option value="en">Spanish</option>
          <option value="ca">Catalan</option>
        </select>
      </div>
      
    </section>
  );
};

export default TopInfo;
