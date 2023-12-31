import React from 'react';
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import './Header.css'
const Header = () => {
  return (
    <header>
      <section class="top-header">
      <div className="logo-container" style={{width:'20%'}}>
          <h1>FEET</h1>
        </div>
        <div className="search-container">
          <input type="text" name="search" placeholder="Enter your product name..." />
          <i className="fa-solid fa-magnifying-glass search-btn"></i>
        </div>
      <div className="icons-container">
        <FaUser className="icon fa-user" />
        <FaHeart className="icon fa-heart" />
        <FaShoppingBag className="icon fa-bag-shopping" />
      </div>
      </section>
      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Men's</a>
        <a href="#">Women's</a>
        <a href="#">Children</a>
        <a href="#">Blog</a>
        <a href="#">Hot Offers</a>
      </nav>
    </header>
  );
};

export default Header;
