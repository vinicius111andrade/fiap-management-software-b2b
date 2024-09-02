import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLayout from '../components/MenuLayout';
import MenuList from '../components/MenuList';
import Modal from '../components/Modal';
import productIcon from '../assets/img/product-icon.png';

const MenuProduto = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const navigate = useNavigate();

  const produtos = [
    { nome: 'Produto 1', tipo: 'Tipo 1' },
    { nome: 'Produto 2', tipo: 'Tipo 2' },
    { nome: 'Produto 3', tipo: 'Tipo 3' },
    { nome: 'Produto 4', tipo: 'Tipo 4' },
    { nome: 'Produto 5', tipo: 'Tipo 5' },
  ];

  const handleDelete = (produto) => {
    setSelectedProduto(produto);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deletando produto: ${selectedProduto.nome}`);
    setModalVisible(false);
    // Implementar lógica real de deleção aqui
    // Após deletar, você pode querer atualizar a lista de produtos ou navegar de volta
    // navigate(-1);
  };

  return (
    <MenuLayout title="PRODUTOS">
      <a href="/adicionar-produto" className="add-button">Adicionar</a>
      <MenuList
        items={produtos}
        onDelete={handleDelete}
        detailPath="/detalhe-produto"
        IconComponent={() => <img src={productIcon} alt="Produto" />}
      />
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR PRODUTO"
        content={
          selectedProduto && (
            <>
              <p>Você está prestes a <span className="delete-text">deletar</span> o produto "<span id="product-name">{selectedProduto.nome}</span>" do sistema. Esta ação é irreversível.</p>
              <p>Detalhes do Produto:</p>
              <ul>
                <li>Nome: <span id="product-detail-name">{selectedProduto.nome}</span></li>
                <li>Tipo: <span id="product-detail-type">{selectedProduto.tipo}</span></li>
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

export default MenuProduto;