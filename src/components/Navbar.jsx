import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <h1 to="/rules" className="logo">Debugging Symposium</h1>
        <div className="nav-links">
        </div>
      </div>
    </nav>
  )
}
