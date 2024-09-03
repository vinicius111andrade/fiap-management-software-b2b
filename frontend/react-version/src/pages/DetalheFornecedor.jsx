import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';

const DetalheFornecedor = () => {
  const [fornecedor, setFornecedor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simula o carregamento dos dados do fornecedor
    const fetchFornecedor = async () => {
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          id: id, 
          nome: 'Fornecedor Exemplo', 
          endereco: 'Rua Exemplo, 123', 
          telefone: '(11) 1234-5678' 
        }), 1000)
      );
      setFornecedor(response);
    };

    fetchFornecedor();
  }, [id]);

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleUpdate = () => {
    navigate(`/adicionar-fornecedor/${id}`);
  };

  const handleCancel = () => {
    navigate('/menu-fornecedor');
  };

  const handleConfirmarExclusao = () => {
    console.log(`Deletando fornecedor: ${fornecedor.nome}`);
    setModalVisible(false);
    navigate('/menu-fornecedor');
  };

  if (!fornecedor) {
    return <Layout title="Carregando..."><p>Carregando detalhes do fornecedor...</p></Layout>;
  }

  return (
    <Layout title="FORNECEDOR">
      <div className="content">
        <form className="all-form">
          <FormInput
            label="Nome"
            id="nome"
            name="nome"
            value={fornecedor.nome}
            readOnly
          />
          <FormInput
            label="Endereço"
            id="endereco"
            name="endereco"
            value={fornecedor.endereco}
            readOnly
          />
          <FormInput
            label="Telefone"
            id="telefone"
            name="telefone"
            value={fornecedor.telefone}
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
        title="DELETAR FORNECEDOR"
        content={
          <>
            <p>Você está prestes a <span className="delete-text">deletar</span> o fornecedor "<span id="supplier-name">{fornecedor.nome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Fornecedor:</p>
            <ul>
              <li>Nome: <span id="supplier-detail-name">{fornecedor.nome}</span></li>
              <li>Endereço: <span id="supplier-detail-address">{fornecedor.endereco}</span></li>
              <li>Telefone: <span id="supplier-detail-phone">{fornecedor.telefone}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
          </>
        }
        onConfirm={handleConfirmarExclusao}
      />
    </Layout>
  );
};

export default DetalheFornecedor;
