import React, { useState } from 'react';
import '../css/App.css'; // Importando o CSS global
import Header from '../components/Header'; // Importando o Header
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
//import Footer from './Footer'; // Importando o Footer
import backArrow from '../assets/img/back-arrow.png';
import productIcon from '../assets/img/product-icon.png';

const MenuProduto = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoNome, setProdutoNome] = useState('');
  const [produtoTipo, setProdutoTipo] = useState('');
  const mostrarModal = (nome, tipo) => {
    setProdutoNome(nome);
    setProdutoTipo(tipo);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };


  const produtos = [
    { nome: 'Produto 1', tipo: 'Tipo 1' },
    { nome: 'Produto 2', tipo: 'Tipo 2' },
    { nome: 'Produto 3', tipo: 'Tipo 3' },
    { nome: 'Produto 4', tipo: 'Tipo 4' },
    { nome: 'Produto 5', tipo: 'Tipo 5' },
  ];

  const navigate = useNavigate(); // Inicialize o useNavigate

  const handleVoltar = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <div>
      <Header />
      <main>
          <div className="back-button">
          <a href="./">
            <img src={backArrow} alt="Voltar" />
          </a>
          </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">PRODUTOS</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="/adicionar-produto" className="add-button">Adicionar</a>

          <div className="list">
            {produtos.map((produto, index) => (
              <div className="item" key={index}>
                <a href="/detalhe-produto" className="all-link">
                  <img src={productIcon} alt="Produto" />
                  <span>{produto.nome}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(produto.nome, produto.tipo)}
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
  
      {modalVisible && (
        <div id="modal-aviso" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={fecharModal}>&times;</span>
            <h2>DELETAR PRODUTO</h2>
            <p>Você está prestes a <span className="delete-text">deletar</span> o produto "<span id="product-name">{produtoNome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Produto:</p>
            <ul>
              <li>Nome: <span id="product-detail-name">{produtoNome}</span></li>
              <li>Tipo: <span id="product-detail-type">{produtoTipo}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={fecharModal}>Cancelar</button>
              <button className="confirm-button" onClick={fecharModal}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MenuProduto;
