import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';

const DetalheUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simula o carregamento dos dados do usuário
    const fetchUsuario = async () => {
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          id: id, 
          nome: 'Usuário Exemplo',
          tipo: 'Administrador'
        }), 1000)
      );
      setUsuario(response);
    };

    fetchUsuario();
  }, [id]);

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleUpdate = () => {
    navigate(`/adicionar-tipo-usuario/${id}`);
  };

  const handleCancel = () => {
    navigate('/menu-usuario');
  };

  const handleConfirmarExclusao = () => {
    console.log(`Deletando usuário: ${usuario.nome}`);
    setModalVisible(false);
    navigate('/menu-usuario');
  };

  if (!usuario) {
    return <Layout title="Carregando..."><p>Carregando detalhes do usuário...</p></Layout>;
  }

  return (
    <Layout title="USUÁRIO">
      <div className="content">
        <div className="action-buttons">
          <a href="/adicionar-tipo-usuario" className="other-button">Tipo Usuário</a>
        </div>
        <form className="all-form">
          <FormInput
            label="Nome"
            id="nome"
            name="nome"
            value={usuario.nome}
            readOnly
          />
          <FormInput
            label="Tipo"
            id="tipo"
            name="tipo"
            value={usuario.tipo}
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
        title="DELETAR USUÁRIO"
        content={
          <>
            <p>Você está prestes a <span className="delete-text">deletar</span> o usuário "<span id="user-name">{usuario.nome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Usuário:</p>
            <ul>
              <li>Nome: <span id="user-detail-name">{usuario.nome}</span></li>
              <li>Tipo: <span id="user-detail-type">{usuario.tipo}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
          </>
        }
        onConfirm={handleConfirmarExclusao}
      />
    </Layout>
  );
};

export default DetalheUsuario;
