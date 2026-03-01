import React from 'react'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-wrapper">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Matoshri Geeta Papers" className="footer-logo" />
              <span className="footer-brand-name">Matoshri Geeta Papers</span>
            </div>
            <p className="footer-about">
              A trusted manufacturer of premium tissue paper, napkin paper, and paper cups — serving hotels, restaurants, offices and homes across India.
            </p>
            <div className="footer-contact-quick">
              <a href="tel:8770703763" className="footer-phone">📞 +91 87707 03763</a>
              <a href="tel:8889652789" className="footer-phone">📞 +91 88896 52789</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('infrastructure')}>Quality & Infrastructure</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-heading">Products</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('products')}>Tissue Paper</button></li>
              <li><button onClick={() => scrollToSection('products')}>Napkin Paper</button></li>
              <li><button onClick={() => scrollToSection('products')}>Paper Cups</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Bulk Orders</button></li>
            </ul>
          </div>

          <div className="footer-address-col">
            <h4 className="footer-col-heading">Address</h4>
            <p className="footer-address">
              Industrial Area Matehna,<br />
              Plot No. 87, Near Rewa Bypass Road,<br />
              Satna, Madhya Pradesh
            </p>
            <div className="footer-badges">
              <span className="badge">🏭 Manufacturing Unit</span>
              <span className="badge">📦 Bulk Supply Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-wrapper footer-bottom-inner">
          <p>© {new Date().getFullYear()} Matoshri Geeta Paper and Allied Industries Pvt. Ltd. All rights reserved.</p>
          <p className="footer-tagline">Quality · Hygiene · Affordable</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
