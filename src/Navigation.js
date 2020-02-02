import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = (props) => {
  return (
    <Navbar id="navBarMain" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Richard Turner</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">   
        <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#simplyEnglish">Simply English</Nav.Link>
            <Nav.Link href="#hiraganaDriller">Hiragana Driller</Nav.Link>
            <Nav.Link href="#simon2">Simon II</Nav.Link>
            <Nav.Link href="#infantSchoolApp">Infant School App</Nav.Link>
            <Nav.Link href="#design">Designs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;