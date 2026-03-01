import React from 'react'
import { img } from '../utils/img'
import './Products.css'

const products = [
  {
    id: 1,
    name: 'Tissue Paper',
    tagline: 'Soft, strong & hygienic',
    features: ['Soft & high quality', 'Hotels, Offices & Home use'],
    image: img('image_79c902aa-e733-414f-b3f1-184e2b4ea4f4.png')
  },
  {
    id: 2,
    name: 'Napkin Paper',
    tagline: 'Durable & highly absorbent',
    features: ['Strong & absorbent', 'Restaurants & Events'],
    image: img('image_3fc52a2b-e20b-4db8-b482-7a1e0af42908.png')
  },
  {
    id: 3,
    name: 'Paper Cups',
    tagline: 'Eco-friendly, all sizes',
    features: ['Different sizes available', 'Tea, Coffee & Juice'],
    image: img('Buzz-Cups.jpg')
  },
]

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="products-wrapper">
        <div className="products-header">
          <p className="products-eyebrow">What We Make</p>
          <h2 className="products-title">Our Products</h2>
          <p className="products-desc">
            Premium-grade paper products built for everyday excellence — crafted with care for hospitality, offices, and homes.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                  loading="lazy"
                />
                <div className="product-img-overlay" />
              </div>
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <ul className="product-features">
                  {product.features.map((f, i) => (
                    <li key={i}>
                      <span className="feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="product-arrow">
                  <span>Learn More</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
