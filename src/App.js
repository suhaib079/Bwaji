
import './App.css';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';


function App() {
  return (
     <div className="App">
        <NavBar/>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/signin" element={<SignIn/>} />
        </Routes>

        <Footer/>
       </div>
  );
}

export default App;

