import React, { useState } from 'react';
import ModalAviso from '../components/AvisoModal';
import Header from '../components/Header';
import backArrow from '../assets/img/back-arrow.png';
import { useNavigate } from 'react-router-dom';

const DetalheUsuario = ({ usuario }) => { // Prop "usuario" com letra minúscula
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleFecharModal = () => {
    setModalVisible(false);
  };

  const handleConfirmarExclusao = () => {
    // Lógica para deletar o usuário (substitua com a sua implementação)
    console.log(`Deletando usuário: ${usuario.nome}`);
  };

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
        <button onClick={handleVoltar}>
            <img src={backArrow} alt="Voltar" />
          </button>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">USUÁRIO</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <div className="action-buttons">
            <a href="/adicionar-usuario" className="update-button">Atualizar</a> {/* Corrigido para minúsculas */}
            <button className="delete-button" onClick={handleDelete}>Deletar</button>
            <a href="/adicionar-tipo-usuario" class="other-button">Tipo Usuário</a>
          </div>
          {/* Detalhes do Usuário */}
          <div className="details">
            <input type="text" readOnly value={usuario ? usuario.nome : 'Nome'} />
            <input type="text" readOnly value={usuario ? usuario.tipo : 'Tipo'} />
          </div> 
        </div>
      </main>

      {/* Modal de Confirmação */}
      {modalVisible && (
        <ModalAviso
          mensagem={`Tem certeza que deseja deletar o usuário "${usuario.nome}"?`}
          onFechar={handleFecharModal}
          onConfirmar={handleConfirmarExclusao}
        />
      )}
    </div>
  );
};

export default DetalheUsuario;
