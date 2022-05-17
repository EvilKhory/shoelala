import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/SHOE_LA_LA_free-file.png';
import ReactDOM from "react-dom";
import SideBar from "./sidebar";

const Nav = () => {
    return (
        <div className='navigation'>
            <div className='burger1'>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /></div>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Boutique">
                    <li>Boutique</li>
                </NavLink>
                <img src={Logo} />
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
const rootElement = document.getElementById("root");
ReactDOM.render(<nav />, rootElement);