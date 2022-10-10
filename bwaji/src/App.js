// import logo from './logo.svg';
import AboutBwaji from './AboutBwaji';
import './App.css';
import Categories from './Categories';
import NavBar from './NavBar';
import Render from './Render';
import './categories.style.scss'

function App() {
  const logo = require('./Bwaji-logo.png'); 
  return (
    <div className="App">
      <NavBar/>
      <Categories/>
      <AboutBwaji/>
      <Render/>
      
    </div>
  );
}

export default App;

