// src/components/Header.jsx
import React from 'react';
import logoskina from '../assets/img/logoskina.png';

const Header = () => {
  return (
    <header>
      <img src={logoskina} alt="Logo ESKINA" id="logo" />
      <h1>ESKINA PACAEMBU</h1>
    </header>
  );
};

export default Header;
