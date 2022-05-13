import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Boutique">
                    <li>Boutique</li>
                </NavLink>
                <NavLink to="/Magasins">
                    <li>Magasins</li>
                </NavLink>
                <NavLink to="/Contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;