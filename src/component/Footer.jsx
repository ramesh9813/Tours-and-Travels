import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Adventure awaits with us! We specialize in crafting unforgettable journeys that transcend boundaries and cultures. Explore the world with confidence, guided by our passion for exploration and commitment to exceptional experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +977-144067890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i class="bi bi-meta"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tours and Travels Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
