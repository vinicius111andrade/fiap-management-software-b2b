import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLayout from '../components/MenuLayout';
import MenuList from '../components/MenuList';
import Modal from '../components/Modal';
import supplierIcon from '../assets/img/delivery-icon.png'

const MenuPedido = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);
  const navigate = useNavigate();

  const pedidos = [
    { nome: 'Pedido 1', tipo: 'Tipo 1' },
    { nome: 'Pedido 2', tipo: 'Tipo 2' },
    { nome: 'Pedido 3', tipo: 'Tipo 3' },
    { nome: 'Pedido 4', tipo: 'Tipo 4' },
    { nome: 'Pedido 5', tipo: 'Tipo 5' },
  ];

  const handleDelete = (pedido) => {
    setSelectedPedido(pedido);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deletando pedido: ${selectedPedido.nome}`);
    setModalVisible(false);
    // Implementar lógica real de deleção aqui
  };

  return (
    <MenuLayout title="PEDIDO">
      <a href="/adicionar-pedido" className="add-button">Adicionar</a>
      <MenuList
        items={pedidos}
        onDelete={handleDelete}
        detailPath="/detalhe-pedido"
        IconComponent={() => <img src={supplierIcon} alt="Pedido" />}
      />
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR PEDIDO"
        content={
          selectedPedido && (
            <>
              <p>Você está prestes a <span className="delete-text">deletar</span> o pedido "<span id="order-name">{selectedPedido.nome}</span>" do sistema. Esta ação é irreversível.</p>
              <p>Detalhes do Pedido:</p>
              <ul>
                <li>Nome: <span id="order-detail-name">{selectedPedido.nome}</span></li>
                <li>Tipo: <span id="order-detail-type">{selectedPedido.tipo}</span></li>
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

export default MenuPedido;