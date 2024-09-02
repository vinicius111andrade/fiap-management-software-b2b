import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLayout from '../components/MenuLayout';
import MenuList from '../components/MenuList';
import Modal from '../components/Modal';
import supplierIcon from '../assets/img/supplier-icon.png';

const MenuFornecedor = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFornecedor, setSelectedFornecedor] = useState(null);
  const navigate = useNavigate();

  const fornecedores = [
    { nome: 'Fornecedor 1', tipo: 'Tipo 1' },
    { nome: 'Fornecedor 2', tipo: 'Tipo 2' },
    { nome: 'Fornecedor 3', tipo: 'Tipo 3' },
    { nome: 'Fornecedor 4', tipo: 'Tipo 4' },
    { nome: 'Fornecedor 5', tipo: 'Tipo 5' },
  ];

  const handleDelete = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deletando fornecedor: ${selectedFornecedor.nome}`);
    setModalVisible(false);
    // Implementar lógica real de deleção aqui
  };

  return (
    <MenuLayout title="FORNECEDOR">
      <a href="/adicionar-fornecedor" className="add-button">Adicionar</a>
      <MenuList
        items={fornecedores}
        onDelete={handleDelete}
        detailPath="/detalhe-fornecedor"
        IconComponent={() => <img src={supplierIcon} alt="Fornecedor" />}
      />
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR FORNECEDOR"
        content={
          selectedFornecedor && (
            <>
              <p>Você está prestes a <span className="delete-text">deletar</span> o fornecedor "<span id="supplier-name">{selectedFornecedor.nome}</span>" do sistema. Esta ação é irreversível.</p>
              <p>Detalhes do Fornecedor:</p>
              <ul>
                <li>Nome: <span id="supplier-detail-name">{selectedFornecedor.nome}</span></li>
                <li>Tipo: <span id="supplier-detail-type">{selectedFornecedor.tipo}</span></li>
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

export default MenuFornecedor;