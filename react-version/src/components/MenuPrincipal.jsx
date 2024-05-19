// src/components/MenuPrincipal.jsx
import React from 'react';
import Header from './Header'; // Importando o Header
//import Footer from './Footer'; // Importando o Footer <Footer />
import '../css/App.css'; // Importando o CSS global

const MenuPrincipal = () => {
  return (
    <div>
      <Header />
      <main>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">MENU PRINCIPAL</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="/menu-produto" className="custom-button">PRODUTO</a>
          <a href="/menu-fornecedor" className="custom-button">FORNECEDOR</a>
          <a href="/menu-usuario" className="custom-button">USUÁRIO</a>
          <a href="/menu-pedido" className="custom-button">PEDIDO</a>
        </div>
      </main>

    </div>
  );
};

export default MenuPrincipal;
