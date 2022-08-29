import React from "react";
import './Header.css';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <div className="contenedorHeader">
            <ul className="links">
        <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">Table</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/users">Users</NavLink></li>
      </ul>
        </div>
    )
}

export default Header;