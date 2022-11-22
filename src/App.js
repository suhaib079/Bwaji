
import AboutBwaji from './AboutBwaji';
import './App.css';
import Categories from './Categories';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router-dom';
import Sest from './Sest';
import SignIn from './SignIn';


function App() {
  const logo = require('./Bwaji-logo.png'); 
  return (
     <div className="App">
        <NavBar/>
        <Routes>
              <Route path="/" element={[<Categories/>,<AboutBwaji/>]} />
              <Route path="/sest" element={<Sest/>} />
              <Route path="/signin" element={<SignIn/>} />
        </Routes>

        <Footer/>
       </div>
  );
}

export default App;

