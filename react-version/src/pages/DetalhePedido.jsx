import React, { useState } from 'react';
import ModalAviso from '../components/AvisoModal';
import Header from '../components/Header';
import backArrow from '../assets/img/back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';

const DetalhePedido = ({ pedido }) => { // Recebe dados do pedido
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenha o ID do pedido da URL

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleFecharModal = () => {
    setModalVisible(false);
  };

  const handleConfirmarExclusao = () => {
    // Lógica para deletar o pedido (substitua com a sua implementação)
    console.log(`Deletando pedido: ${pedido.id}`);

    // Volta para a página anterior após a exclusão
    navigate('/menu-pedido');
  };

  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
          <a href="/menu-pedido">
            <img src={backArrow} alt="Voltar" />
          </a>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">PEDIDO</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <div className="action-buttons">
            <a href={`/adicionar-pedido/${id}`} className="update-button">Atualizar</a>
            <button className="delete-button" onClick={handleDelete}>Deletar</button>
          </div>
          {/* Detalhes do Pedido */}
          <div className="details">
            <input type="text" readOnly value={pedido ? pedido.data : 'Data'} />
            <input type="text" readOnly value={pedido ? pedido.usuario : 'Usuário'} />
            <input type="text" readOnly value={pedido ? pedido.produto : 'Produto'} />
            <input type="text" readOnly value={pedido ? pedido.quantidade : 'Quantidade'} />
          </div>
        </div>
      </main>

      {/* Modal de Confirmação */}
      {modalVisible && (
        <ModalAviso
          mensagem={`Tem certeza que deseja deletar o pedido de "${pedido.usuario}"?`}
          onFechar={handleFecharModal}
          onConfirmar={handleConfirmarExclusao}
        />
      )}
    </div>
  );
};

export default DetalhePedido;
