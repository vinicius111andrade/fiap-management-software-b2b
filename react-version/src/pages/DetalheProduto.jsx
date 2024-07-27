import React from 'react';
import '../css/App.css'; // Importando o CSS global
import logoskina from '../assets/img/logoskina.png'; // Importando a imagem do logo
import backArrow from '../assets/img/back-arrow.png'; // Importando a imagem do botão de voltar
import Header from '../components/Header'; // Importando o Header
//import Footer from './Footer'; // Importando o Footer

const DetalheProduto = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
          <a href="./menu-produto">
            <img src={backArrow} alt="Voltar" />
          </a>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">PRODUTOS</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <div className="action-buttons">
            <a href="/adicionar-produto" className="update-button">Atualizar</a>
            <a href="/menu-produto" className="delete-button">
              Deletar
            </a>
          </div>
          {/* Adicionando a área de detalhes do produto */}
          <div className="details">
            <input type="text" readOnly value="Nome" />
            <input type="text" readOnly value="Tipo" />
            <input type="text" readOnly value="Quantidade" />
            <input type="text" readOnly value="Preço" />
            <input type="text" readOnly value="Lote" />
          </div>
        </div>
      </main>

    </div>
  );
};

export default DetalheProduto;
