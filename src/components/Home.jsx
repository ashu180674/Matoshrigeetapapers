import React from 'react'
import './Home.css'

const stats = [
  { value: '3+', label: 'Product Categories' },
  { value: '100%', label: 'Quality Assured' },
  { value: 'Bulk', label: 'Orders Available' },
  { value: 'Satna', label: 'M.P., India' },
]

const Home = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="home">
      <div className="home-overlay" />
      <div className="home-container">
        <div className="home-content">
          <p className="home-eyebrow">Trusted Paper Manufacturer — Satna, M.P.</p>
          <h1 className="home-title">
            Premium Paper Products <br />
            <span className="home-title-highlight">Crafted with Purpose</span>
          </h1>
          <p className="home-subtitle">
            Tissue Paper · Napkin Paper · Paper Cups<br />
            Designed for Hotels, Restaurants, Offices & Daily Use
          </p>
          <div className="home-cta">
            <button className="btn-primary" onClick={scrollToProducts}>Explore Products</button>
            <button className="btn-secondary" onClick={scrollToContact}>Get in Touch</button>
          </div>
        </div>
      </div>

      <div className="home-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home
