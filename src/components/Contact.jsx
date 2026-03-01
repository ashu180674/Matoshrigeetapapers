import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <p className="contact-eyebrow">Reach Out</p>
          <h2 className="contact-title">Let's Talk <span className="contact-title-accent">Paper</span></h2>
          <p className="contact-intro">
            Looking for bulk orders, product enquiries, or just want to know more about us? Reach out — we're always happy to help.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Address</p>
                <p className="contact-detail-value">
                  Industrial Area Matehna, Plot No. 87<br />
                  Near Rewa Bypass Road, Satna (M.P.)
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Phone</p>
                <a href="tel:8770703763" className="contact-phone">+91 87707 03763</a>
                <a href="tel:8889652789" className="contact-phone">+91 88896 52789</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h3 className="contact-card-title">Send an Enquiry</h3>
            <div className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="e.g. Ramesh Sharma" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label>Product Interest</label>
                <select>
                  <option value="">Select a product</option>
                  <option>Tissue Paper</option>
                  <option>Napkin Paper</option>
                  <option>Paper Cups</option>
                  <option>All Products / Bulk Order</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your requirements..." rows="4" />
              </div>
              <button className="contact-submit-btn">Send Enquiry →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
