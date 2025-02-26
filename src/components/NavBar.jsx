import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'


function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Adams Website</Link>
        </div>
        <div>
            <Link to="/" className='nav-link'>Home </Link>
            <Link to="/About" className='nav-link'> About</Link>
            <Link to="/Projects" className='nav-link'> Projects</Link>
            <Link to="/Experience" className='nav-link'> Experience</Link>
            <Link to="/Contact" className='nav-link'> Contact</Link>
        </div>
    </div>
  )
}
 
export default NavBar