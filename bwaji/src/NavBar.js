import Nav from 'react-bootstrap/Nav';
const logo = require('./Bwaji-logo.png'); 
const img1 = require('./cars/bmw-hero.jpg')
const img2 = require('./cars/chevrolet-hero.jpg')
const img3 = require('./cars/ford-hero.jpg')
const img4 = require('./cars/bmw-hero.jpg')


function NavBar() {
    let imges=[img1,img2,img3,img4]
  return (
    <div>
    <ul className='x'>
  <li ><a href="#home">Home</a></li>
  <li ><a href="#news">Log in</a></li>
  {/* <li ><a href="#contact"></a></li> */}
  <li ><a href="#about">About</a></li>
</ul>
  <img src={logo}></img>
  {imges.map((img)=>(
    // <h2>{img}</h2>
    
    <img src={img }></img>
    
  ))}
  </div>
  );
}

export default NavBar;