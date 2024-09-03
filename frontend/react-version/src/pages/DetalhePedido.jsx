import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';

const DetalhePedido = () => {
  const [pedido, setPedido] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simula o carregamento dos dados do pedido
    const fetchPedido = async () => {
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          id: id, 
          data: '2024-08-29',
          usuario: 'João Silva',
          produto: 'Produto Exemplo',
          quantidade: 5
        }), 1000)
      );
      setPedido(response);
    };

    fetchPedido();
  }, [id]);

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleUpdate = () => {
    navigate(`/adicionar-pedido/${id}`);
  };

  const handleCancel = () => {
    navigate('/menu-pedido');
  };

  const handleConfirmarExclusao = () => {
    console.log(`Deletando pedido: ${pedido.id}`);
    setModalVisible(false);
    navigate('/menu-pedido');
  };

  if (!pedido) {
    return <Layout title="Carregando..."><p>Carregando detalhes do pedido...</p></Layout>;
  }

  return (
    <Layout title="PEDIDO">
      <div className="content">
        <form className="all-form">
          <FormInput
            label="Data"
            id="data"
            name="data"
            value={pedido.data}
            readOnly
          />
          <FormInput
            label="Usuário"
            id="usuario"
            name="usuario"
            value={pedido.usuario}
            readOnly
          />
          <FormInput
            label="Produto"
            id="produto"
            name="produto"
            value={pedido.produto}
            readOnly
          />
          <FormInput
            label="Quantidade"
            id="quantidade"
            name="quantidade"
            value={pedido.quantidade.toString()}
            readOnly
          />
          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancelar</button>
            <button type="button" className="save-button" onClick={handleUpdate}>Atualizar</button>
          </div>
        </form>
      </div>
      
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR PEDIDO"
        content={
          <>
            <p>Você está prestes a <span className="delete-text">deletar</span> o pedido "<span id="pedido-id">Pedido #{pedido.id}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Pedido:</p>
            <ul>
              <li>ID: <span id="pedido-detail-id">{pedido.id}</span></li>
              <li>Produto: <span id="pedido-detail-produto">{pedido.produto}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
          </>
        }
        onConfirm={handleConfirmarExclusao}
      />
    </Layout>
  );
};

export default DetalhePedido;
