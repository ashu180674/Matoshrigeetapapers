import React from 'react'
import './Infrastructure.css'

const features = [
  {
    icon: '⚙️',
    title: 'Modern Machines',
    description: 'State-of-the-art manufacturing equipment ensures precision and consistency in every product.'
  },
  {
    icon: '🧼',
    title: 'Hygienic Production',
    description: 'Fully sanitized, clean production floor meeting strict hygiene standards throughout.'
  },
  {
    icon: '⭐',
    title: 'Best Raw Material',
    description: 'Only premium-grade raw materials are sourced, ensuring a superior finished product.'
  },
  {
    icon: '📦',
    title: 'Bulk Orders',
    description: 'Flexible bulk order facility available for distributors, hotels, and large businesses.'
  },
]

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="infra">
      <div className="infra-bg-strip" />
      <div className="infra-wrapper">
        <div className="infra-header">
          <p className="infra-eyebrow">Our Capabilities</p>
          <h2 className="infra-title">Infrastructure & Quality</h2>
          <p className="infra-desc">
            Built on the foundation of modern technology, hygiene, and best-in-class raw materials.
          </p>
        </div>

        <div className="infra-grid">
          {features.map((f, i) => (
            <div key={i} className="infra-card">
              <div className="infra-icon-wrap">
                <span className="infra-icon">{f.icon}</span>
              </div>
              <h3 className="infra-card-title">{f.title}</h3>
              <p className="infra-card-desc">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="infra-banner">
          <img src="/images/modern-machinery.png" alt="Manufacturing" className="infra-banner-img" />
          <div className="infra-banner-overlay">
            <p className="infra-banner-text">"Quality is not an act, it's a habit — we build it into every product we make."</p>
            <span className="infra-banner-brand">— Matoshri Geeta Papers</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infrastructure
