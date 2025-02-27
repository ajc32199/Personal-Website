import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  
  return(
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Adams Website</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Experience">Experience</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
  
  
  
  
  
  
  
  
  
  
  
  // return (
  //   <div className="navbar">
  //       <div className="navbar-brand">
  //           <Link to="/">Adams Website</Link>
  //       </div>
  //       <div>
  //           <Link to="/" className='nav-link'>Home </Link>
  //           <Link to="/About" className='nav-link'> About</Link>
  //           <Link to="/Projects" className='nav-link'> Projects</Link>
  //           <Link to="/Experience" className='nav-link'> Experience</Link>
  //           <Link to="/Contact" className='nav-link'> Contact</Link>
  //       </div>
  //   </div>
  //)
}
 
export default NavBar