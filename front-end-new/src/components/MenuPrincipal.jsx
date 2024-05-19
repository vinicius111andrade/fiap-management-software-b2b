// src/components/MenuPrincipal.jsx
import React from 'react';
import '../css/App.css'; // Importando o CSS global
import logoskina from '../assets/img/logoskina.png';

const MenuPrincipal = () => {
  return (
    <div>
      <header>
        <img src={logoskina} alt="Logo ESKINA" id="logo" />
        <h1>ESKINA PACAEMBU</h1>
      </header>

      <main>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">MENU PRINCIPAL</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="MenuProduto.html" className="custom-button">PRODUTO</a>
          <a href="MenuFornecedor.html" className="custom-button">FORNECEDOR</a>
          <a href="MenuUsuario.html" className="custom-button">USUÁRIO</a>
          <a href="MenuPedido.html" className="custom-button">PEDIDO</a>
        </div>
      </main>

      <footer>
        <p className="credits">Built in 2024, powered by FIAP</p>
      </footer>
    </div>
  );
};

export default MenuPrincipal;
