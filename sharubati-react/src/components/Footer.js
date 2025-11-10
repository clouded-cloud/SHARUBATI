import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><a href="#menu">All Menu</a></li>
              <li><a href="#merchandise">Goods & Merch</a></li>
              <li><a href="#">Limited Editions</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Info</h3>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <p>Follow our journey and discover new releases.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-spotify"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 SHARUBATI. All rights reserved. <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
