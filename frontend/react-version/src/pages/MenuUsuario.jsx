// MenuUsuario.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLayout from '../components/MenuLayout';
import MenuList from '../components/MenuList';
import Modal from '../components/Modal';
import userIcon from '../assets/img/user.png';

const MenuUsuario = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const navigate = useNavigate();

  const usuarios = [
    { nome: 'Usuário 1', tipo: 'Tipo 1' },
    { nome: 'Usuário 2', tipo: 'Tipo 2' },
    { nome: 'Usuário 3', tipo: 'Tipo 3' },
    { nome: 'Usuário 4', tipo: 'Tipo 4' },
    { nome: 'Usuário 5', tipo: 'Tipo 5' },
  ];

  const handleDelete = (usuario) => {
    setSelectedUsuario(usuario);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deletando usuário: ${selectedUsuario.nome}`);
    setModalVisible(false);
    navigate(-1);
    // Implementar lógica real de deleção aqui
  };

  return (
    <MenuLayout title="USUÁRIO">
      <a href="/adicionar-usuario" className="add-button">Adicionar</a>
      <MenuList
        items={usuarios}
        onDelete={handleDelete}
        detailPath="/detalhe-usuario"
        IconComponent={() => <img src={userIcon} alt="Usuário" />}
      />
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR USUÁRIO"
        content={
          selectedUsuario && (
            <>
              <p>Você está prestes a <span className="delete-text">deletar</span> o usuário "<span id="user-name">{selectedUsuario.nome}</span>" do sistema. Esta ação é irreversível.</p>
              <p>Detalhes do Usuário:</p>
              <ul>
                <li>Nome: <span id="user-detail-name">{selectedUsuario.nome}</span></li>
                <li>Tipo: <span id="user-detail-type">{selectedUsuario.tipo}</span></li>
              </ul>
              <p>Tem certeza que deseja proceder com a exclusão?</p>
            </>
          )
        }
        onConfirm={handleConfirmDelete}
      />
    </MenuLayout>
  );
};

export default MenuUsuario;