import React, { useState } from 'react';
import ModalAviso from '../components/AvisoModal'; // Certifique-se de ter o componente ModalAviso
import Header from '../components/Header';
import backArrow from '../assets/img/back-arrow.png';
import { useNavigate } from 'react-router-dom';

const DetalheFornecedor = ({ fornecedor }) => { // Recebe dados do fornecedor
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleFecharModal = () => {
    setModalVisible(false);
  };

  const handleConfirmarExclusao = () => {
    // Lógica para deletar o fornecedor (substitua com a sua implementação)
    console.log(`Deletando fornecedor: ${fornecedor.nome}`);

    // Volta para a página anterior após a exclusão
    navigate('/menu-fornecedor'); 
  };

  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
          <a href="/menu-fornecedor">
            <img src={backArrow} alt="Voltar" />
          </a>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">FORNECEDOR</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <div className="action-buttons">
            <a href="/adicionar-fornecedor" className="update-button">Atualizar</a>
            <button className="delete-button" onClick={handleDelete}>Deletar</button>
          </div>
          {/* Detalhes do Fornecedor */}
          <div className="details">
            <input type="text" readOnly value={fornecedor ? fornecedor.nome : 'Nome'} />
            <input type="text" readOnly value={fornecedor ? fornecedor.endereco : 'Endereço'} />
            <input type="text" readOnly value={fornecedor ? fornecedor.telefone : 'Telefone'} />
          </div>
        </div>
      </main>

      {/* Modal de Confirmação */}
      {modalVisible && (
        <ModalAviso
          mensagem={`Tem certeza que deseja deletar o fornecedor "${fornecedor.nome}"?`}
          onFechar={handleFecharModal}
          onConfirmar={handleConfirmarExclusao}
        />
      )}
    </div>
  );
};

export default DetalheFornecedor;
