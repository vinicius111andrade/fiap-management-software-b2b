// src/components/MenuUsuario.jsx
import React from 'react';
import '../css/App.css'; // Importando o CSS global
import logoskina from '../assets/img/logoskina.png';
import backArrow from '../assets/img/back-arrow.png';
import userIcon from '../assets/img/user.png';

const MenuUsuario = () => {
  const mostrarModal = (nomeUsuario, tipoUsuario) => {
    document.getElementById('user-name').textContent = nomeUsuario;
    document.getElementById('user-detail-name').textContent = nomeUsuario;
    document.getElementById('user-detail-type').textContent = tipoUsuario;
    document.getElementById('modal-aviso').style.display = 'block';
  };

  const fecharModal = () => {
    document.getElementById('modal-aviso').style.display = 'none';
  };

  const confirmarExclusao = () => {
    alert('Usuário excluído!');
    fecharModal();
  };

  window.onclick = function (event) {
    const modal = document.getElementById('modal-aviso');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <div>
      <header>
        <img src={logoskina} alt="Logo ESKINA" id="logo" />
        <h1>ESKINA PACAEMBU</h1>
      </header>

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
            {['Usuário 1', 'Usuário 2', 'Usuário 3', 'Usuário 4', 'Usuário 5'].map((usuario, index) => (
              <div className="item" key={index}>
                <a href="DetalheUsuario.html" className="product-link">
                  <img src={userIcon} alt="Usuário" />
                  <span>{usuario}</span>
                </a>
                <button
                  className="delete-button"
                  onClick={() => mostrarModal(usuario, index % 2 === 0 ? 'Administrador' : 'Comum')}
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p className="credits">Built in 2024, powered by FIAP</p>
      </footer>

      <div id="modal-aviso" className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={fecharModal}>&times;</span>
          <h2>DELETAR USUÁRIO</h2>
          <p>
            Você está prestes a <span className="delete-text">deletar</span> o usuário "<span id="user-name">[Nome do Usuário]</span>" do sistema. Esta ação é irreversível.
          </p>
          <p>Detalhes do Usuário:</p>
          <ul>
            <li>Nome: <span id="user-detail-name">[Nome do Usuário]</span></li>
            <li>Tipo Usuário: <span id="user-detail-type">[Tipo Usuário]</span></li>
          </ul>
          <p>Tem certeza que deseja proceder com a exclusão?</p>
          <div className="modal-buttons">
            <button className="cancel-button" onClick={fecharModal}>Cancelar</button>
            <button className="confirm-button" onClick={confirmarExclusao}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuUsuario;
