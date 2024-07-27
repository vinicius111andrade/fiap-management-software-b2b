import React, { useState } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import backArrow from '../assets/img/back-arrow.png';
import userIcon from '../assets/img/user.png';

const MenuUsuario = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); // Armazena o usuário a ser excluído
  const navigate = useNavigate();

  const mostrarModal = (usuario) => {
    setUsuarioSelecionado(usuario);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const handleConfirmarExclusao = () => {
    if (usuarioSelecionado) {
      // Lógica para deletar o usuário (substitua com a sua implementação)
      console.log(`Deletando usuário: ${usuarioSelecionado.nome}`);

      // Volta para a página anterior após a exclusão
      navigate(-1);
    }
    fecharModal(); // Fecha o modal após a ação
  };

  const usuarios = [
    { nome: 'Usuário 1', tipo: 'Tipo 1' },
    { nome: 'Usuário 2', tipo: 'Tipo 2' },
    { nome: 'Usuário 3', tipo: 'Tipo 3' },
    { nome: 'Usuário 4', tipo: 'Tipo 4' },
    { nome: 'Usuário 5', tipo: 'Tipo 5' },
  ];

  const handleVoltar = () => {
    navigate(-1);
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
        <h2 className="menu-title">USUÁRIO</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <a href="/adicionar-usuario" className="add-button">Adicionar</a>

          <div className="list">
            {usuarios.map((usuario, index) => (
              <div className="item" key={index}>
                <a href="/detalhe-usuario" className="all-link">
                  <img src={userIcon} alt="Usuário" />
                  <span>{usuario.nome}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(usuario)} // Passa o objeto usuario inteiro
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal de Confirmação */}
      {modalVisible && (
        <div id="modal-aviso" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={fecharModal}>&times;</span>
            <h2>DELETAR USUÁRIO</h2>
            <p>
              Você está prestes a <span className="delete-text">deletar</span> o usuário "
              <span id="user-name">{usuarioSelecionado.nome}</span>" do sistema. Esta ação é irreversível.
            </p>
            <p>Detalhes do Usuário:</p>
            <ul>
              <li>Nome: <span id="user-detail-name">{usuarioSelecionado.nome}</span></li>
              <li>Tipo: <span id="user-detail-type">{usuarioSelecionado.tipo}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={fecharModal}>Cancelar</button>
              <button className="confirm-button" onClick={handleConfirmarExclusao}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuUsuario;
