import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    
    <Menu {...props}>
      <a className="menu-item" href="/">
        Accueil
      </a>

      <a className="menu-item" href="/boutique">
        Boutique
      </a>

      <a className="menu-item" href="/magasins">
        Magasins
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};
