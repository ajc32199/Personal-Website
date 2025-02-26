import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Adams Website</Link>
        </div>
        <div>
            <Link to="/" className='nav-link'>Home </Link>
            <Link to="/About" className='nav-link'> About</Link>
        </div>
    </div>
  )
}
 
export default NavBar