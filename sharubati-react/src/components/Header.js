import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">SHARUBATI</a>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#merchandise">Goods</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="cart-icon">
            <i className="fas fa-shopping-bag"></i>
            <div className="cart-count">{cartCount}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
