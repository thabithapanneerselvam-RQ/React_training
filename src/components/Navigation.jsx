import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <nav className="home-page">
            <NavLink to="/">HOME</NavLink> |{" "}
            <NavLink to="/about">ABOUT</NavLink> |{" "}
            <NavLink to="/contact">CONTACT</NavLink> |{" "}
            <NavLink to="/products">PRODUCTS</NavLink> 
        </nav>
    );
}

export default Navigation;