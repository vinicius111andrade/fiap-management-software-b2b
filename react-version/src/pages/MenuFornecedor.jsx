import React, { useState } from 'react';
import '../css/App.css'; // Importando o CSS global
import Header from '../components/Header'; // Importando o Header
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
//import Footer from './Footer'; // Importando o Footer
import backArrow from '../assets/img/back-arrow.png';
import supplierIcon from '../assets/img/supplier-icon.png';

const MenuFornecedor = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [FornecedorNome, setFornecedorNome] = useState('');
  const [FornecedorTipo, setFornecedorTipo] = useState('');
  const mostrarModal = (nome, tipo) => {
    setFornecedorNome(nome);
    setFornecedorTipo(tipo);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };


  const Fornecedors = [
    { nome: 'Fornecedor 1', tipo: 'Tipo 1' },
    { nome: 'Fornecedor 2', tipo: 'Tipo 2' },
    { nome: 'Fornecedor 3', tipo: 'Tipo 3' },
    { nome: 'Fornecedor 4', tipo: 'Tipo 4' },
    { nome: 'Fornecedor 5', tipo: 'Tipo 5' },
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
        <h2 className="menu-title">FORNECEDOR</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="/adicionar-Fornecedor" className="add-button">Adicionar</a>

          <div className="list">
            {Fornecedors.map((Fornecedor, index) => (
              <div className="item" key={index}>
                <a href="/detalhe-Fornecedor" className="all-link">
                  <img src={supplierIcon} alt="Fornecedor" />
                  <span>{Fornecedor.nome}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(Fornecedor.nome, Fornecedor.tipo)}
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
            <h2>DELETAR Fornecedor</h2>
            <p>Você está prestes a <span className="delete-text">deletar</span> o Fornecedor "<span id="supplier-name">{FornecedorNome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Fornecedor:</p>
            <ul>
              <li>Nome: <span id="supplier-detail-name">{FornecedorNome}</span></li>
              <li>Tipo: <span id="supplier-detail-type">{FornecedorTipo}</span></li>
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

export default MenuFornecedor;
