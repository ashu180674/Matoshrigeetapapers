import React from 'react'
import { img } from '../utils/img'
import './About.css'

const pillars = [
  { icon: '🏭', label: 'Modern Manufacturing' },
  { icon: '🌿', label: 'Eco-Friendly' },
  { icon: '💎', label: 'Premium Quality' },
  { icon: '🤝', label: 'Customer First' },
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-image-col">
          <img
            src={img('modern-machinery.png')}
            alt="Our Manufacturing Facility"
            className="about-img"
          />
        </div>
        <div className="about-text-col">
          <p className="about-eyebrow">Who We Are</p>
          <h2 className="about-heading">
            A Trusted Name in <br />
            <span className="about-heading-accent">Paper Manufacturing</span>
          </h2>
          <p className="about-body">
            <strong>Matoshri Geeta Paper and Allied Industries Pvt. Ltd., Satna (M.P.)</strong> is a trusted paper product manufacturing company committed to delivering excellence.
          </p>
          <p className="about-body">
            We use modern machinery and high-quality raw materials to produce premium-quality tissues, napkins, and paper cups — trusted by hotels, restaurants, offices and homes.
          </p>
          <p className="about-body">
            Our goal is to provide customers with the best quality products at reasonable prices while building long-term business relationships.
          </p>
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-item">
                <span className="pillar-icon">{p.icon}</span>
                <span className="pillar-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
