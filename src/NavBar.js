// import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from  'react-router-dom';

// const img1 = './images/cars/bmw-hero.jpg'
// const img2 = './images//cars/chevrolet-hero.jpg'
// const img3 = './images//cars/ford-hero.jpg'
// const img4 = './images//cars/bmw-hero.jpg'

function NavBar() {
    // let imges=[img1,img2,img3,img4]
    // let imges=[img1]
  return (
    <div>

    <div>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/"><img className='navlogo' src="/images/logo/Bwaji-logo.png"></img></Navbar.Brand>
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