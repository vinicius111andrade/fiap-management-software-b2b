import React, { useState } from 'react';
import '../css/App.css'; // Importando o CSS global
import Header from '../components/Header'; // Importando o Header
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
//import Footer from './Footer'; // Importando o Footer
import backArrow from '../assets/img/back-arrow.png';
import supplierIcon from '../assets/img/supplier-icon.png';

const MenuPedido = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [PedidoNome, setPedidoNome] = useState('');
  const [PedidoTipo, setPedidoTipo] = useState('');
  const mostrarModal = (nome, tipo) => {
    setPedidoNome(nome);
    setPedidoTipo(tipo);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };


  const Pedidos = [
    { nome: 'Pedido 1', tipo: 'Tipo 1' },
    { nome: 'Pedido 2', tipo: 'Tipo 2' },
    { nome: 'Pedido 3', tipo: 'Tipo 3' },
    { nome: 'Pedido 4', tipo: 'Tipo 4' },
    { nome: 'Pedido 5', tipo: 'Tipo 5' },
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
        <h2 className="menu-title">PEDIDO</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="/adicionar-Pedido" className="add-button">Adicionar</a>

          <div className="list">
            {Pedidos.map((Pedido, index) => (
              <div className="item" key={index}>
                <a href="/detalhe-Pedido" className="all-link">
                  <img src={supplierIcon} alt="Pedido" />
                  <span>{Pedido.nome}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(Pedido.nome, Pedido.tipo)}
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
            <h2>DELETAR Pedido</h2>
            <p>Você está prestes a <span className="delete-text">deletar</span> o Pedido "<span id="supplier-name">{PedidoNome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Pedido:</p>
            <ul>
              <li>Nome: <span id="supplier-detail-name">{PedidoNome}</span></li>
              <li>Tipo: <span id="supplier-detail-type">{PedidoTipo}</span></li>
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

export default MenuPedido;
