import React from 'react';
import '../css/App.css'; // Importando o CSS global
import logoskina from '../assets/img/logoskina.png'; // Importando a imagem do logo
import backArrow from '../assets/img/back-arrow.png'; // Importando a imagem do botão de voltar
import Header from './Header'; // Importando o Header
//import Footer from './Footer'; // Importando o Footer

const AdicionarProduto = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
          <a href="javascript:history.back()">
            <img src={backArrow} alt="Voltar" />
          </a>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">PRODUTOS</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          {/* Formulário de exemplo */}
          <form className="product-form">
            <label htmlFor="name">Nome *</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="type">Tipo *</label>
            <select id="type" name="type" required>
              <option value="">Selecione</option>
              <option value="type1">Tipo 1</option>
              <option value="type2">Tipo 2</option>
            </select>

            <label htmlFor="quantity">Quantidade *</label>
            <input type="number" id="quantity" name="quantity" required />

            <label htmlFor="price">Preço *</label>
            <input type="text" id="price" name="price" required />

            <label htmlFor="batch">Lote *</label>
            <select id="batch" name="batch" required>
              <option value="">Selecione</option>
              <option value="batch1">Lote 1</option>
              <option value="batch2">Lote 2</option>
            </select>

            <div className="form-buttons">
              <a href="/menu-produto">
                <button type="button" className="cancel-button">Cancelar</button>
              </a>
              <a href="/menu-produto">
                <button type="button" className="save-button">Salvar</button>
              </a>
            </div>
          </form>
        </div>
      </main>

    </div>
  );
};

export default AdicionarProduto;
