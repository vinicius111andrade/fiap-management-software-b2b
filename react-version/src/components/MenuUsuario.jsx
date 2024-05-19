// src/components/MenuUsuario.jsx
import React, { useState } from 'react';
import '../css/App.css'; // Importando o CSS global
import Header from './Header'; // Importando o Header
import Footer from './Footer'; // Importando o Footer
import backArrow from '../assets/img/back-arrow.png';
import userIcon from '../assets/img/user.png';

const MenuUsuario = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioNome, setUsuarioNome] = useState('');
  const [usuarioTipo, setUsuarioTipo] = useState('');

  const mostrarModal = (nome, tipo) => {
    setUsuarioNome(nome);
    setUsuarioTipo(tipo);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const confirmarExclusao = () => {
    alert(`Usuário ${usuarioNome} excluído!`);
    fecharModal();
  };

  const usuarios = [
    { nome: 'Usuário 1', tipo: 'Administrador' },
    { nome: 'Usuário 2', tipo: 'Comum' },
    { nome: 'Usuário 3', tipo: 'Comum' },
    { nome: 'Usuário 4', tipo: 'Administrador' },
    { nome: 'Usuário 5', tipo: 'Comum' },
  ];

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
        <h2 className="menu-title">USUÁRIO</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="../pages/AdicionarUsuario.html" className="add-button">Adicionar</a>

          <div className="list">
            {usuarios.map((usuario, index) => (
              <div className="item" key={index}>
                <a href="DetalheUsuario.html" className="product-link">
                  <img src={userIcon} alt="Usuário" />
                  <span>{usuario.nome}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(usuario.nome, usuario.tipo)}
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {modalVisible && (
        <div id="modal-aviso" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={fecharModal}>&times;</span>
            <h2>DELETAR USUÁRIO</h2>
            <p>Você está prestes a <span className="delete-text">deletar</span> o usuário "<span id="user-name">{usuarioNome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Usuário:</p>
            <ul>
              <li>Nome: <span id="user-detail-name">{usuarioNome}</span></li>
              <li>Tipo Usuário: <span id="user-detail-type">{usuarioTipo}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={fecharModal}>Cancelar</button>
              <button className="confirm-button" onClick={confirmarExclusao}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUsuario;
