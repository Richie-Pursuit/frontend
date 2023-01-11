import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"


function NavBar(props) {
    return (
        <nav className='navBar'>
        <h1 className='home'>
            <Link to='/'>Home</Link>
        </h1>
          <h1 className='budget-app'>
            <Link to="/transactions">Budget App</Link>
          </h1>
          
            <Link to="/transactions/new">
               <button className='new-trans'>
               New Transaction
               </button>
                
            </Link>
        </nav>
    );
}

export default NavBar;