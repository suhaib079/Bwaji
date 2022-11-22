import { Route, Routes } from "react-router-dom";
import NavBar from "../../NavBar";

const Cat = () => {
    return ( 
        <Routes>
            <Route path="/cat" element={<NavBar/>}/>
           

        </Routes>
     );
}
 
export default Cat;