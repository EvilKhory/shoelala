import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    
    <Menu {...props}>
      <a className="menu-item" href="/">
        Accueil
      </a>

      <a className="menu-item" href="/burgers">
        Boutique
      </a>

      <a className="menu-item" href="/pizzas">
        Magasins
      </a>

      <a className="menu-item" href="/desserts">
        Contact
      </a>
    </Menu>
  );
};
