import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Layout = ({children}) => {
    return ( 
        <>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </>
     );
}
 
export default Layout;