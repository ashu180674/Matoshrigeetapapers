import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Infrastructure from './components/Infrastructure'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Products />
      <Infrastructure />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

