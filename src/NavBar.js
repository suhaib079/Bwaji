// import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from  'react-router-dom';

const logo = require('./Bwaji-logo.png'); 
const img1 = require('./cars/bmw-hero.jpg')
const img2 = require('./cars/chevrolet-hero.jpg')
const img3 = require('./cars/ford-hero.jpg')
const img4 = require('./cars/bmw-hero.jpg')

function NavBar() {
    let imges=[img1,img2,img3,img4]
  return (
    <div>

    <div>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/"><img className='navlogo' src={logo}></img></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/sest">Features</Nav.Link>
        <Nav.Link href="/signin">sign in</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
   
      <hr class="new1"></hr>
  
  </div>
  <Outlet/>
  </div>
  );
}

export default NavBar;