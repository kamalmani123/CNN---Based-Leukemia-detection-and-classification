import React from 'react'
import { Link } from "react-router-dom";
import "../Css/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="nav">
      <h1 className="name">Leukemia Detection</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Detection">Detection</Link>
        </li>
        <li>
          <Link to="/Prevention">Prevention</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar; 