import React from 'react';
import { Link } from 'react-router-dom';
import logoskina from '../assets/img/logoskina.png';

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-link">
        <img src={logoskina} alt="Logo ESKINA" id="logo" />
        <h1>ESKINA PACAEMBU</h1>
      </Link>
    </header>
  );
};

export default Header;