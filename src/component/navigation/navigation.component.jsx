import React from "react";
import {Link} from "react-router-dom";

const Header=()=>
{

   
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light"  >
        <a className="navbar-brand" href="#">Navbar</a>

        <div className=" navbar" >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/product">Products</Link>
                </li>
            
            </ul>
            
        </div>
    </nav>

    )
}
export default Header;
