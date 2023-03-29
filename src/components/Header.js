import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
       <div className="header-logo">
        <img src={logo} alt="logo" />
       </div >
       <div className="header-search-bar">
        <label for="name"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input type="text" placeholder="Rechercher un produit" />
       </div>
      <div className="header-menu-wrapper">
        <div className="header-phone">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="header-map">
          <i class="fa-solid fa-location-dot"></i>
        </div>
           <a href="/"> <i class="fa-solid fa-arrow-left"></i> Retour à l'accueil</a>
      </div>

       <div className="header-search-bar-2">
        <label for="name"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input type="text" placeholder="Rechercher un produit" />
       </div>
    </header>
  );
};

export default Header;
