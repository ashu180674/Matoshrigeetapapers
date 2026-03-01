import React from 'react'
import './Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="/images/logo.png" 
        alt="Matoshri Geeta Papers Logo" 
        className="logo-image"
        onError={(e) => {
          // Fallback if logo.png doesn't exist
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="logo-fallback" style={{ display: 'none' }}>
        <div className="logo-placeholder">MG</div>
      </div>
      <div className="logo-text">Matoshri Geeta Papers</div>
    </div>
  )
}

export default Logo

