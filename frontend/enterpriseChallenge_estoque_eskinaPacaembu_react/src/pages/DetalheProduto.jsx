import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import Layout from '../components/Layout';
import FormInput from '../components/FormInput';
import Modal from '../components/Modal';

const DetalheProduto = () => {
  const [produto, setProduto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();

  useEffect(() => {
    const productToShow = products.find(p => p.id === id);
    if (productToShow) {
      setProduto(productToShow);
    } else {
      navigate('/menu-produto');
    }
  }, [id, products, navigate]);

  const handleDelete = () => {
    setModalVisible(true);
  };

  const handleUpdate = () => {
    navigate(`/adicionar-produto/${id}`);
  };

  const handleConfirmarExclusao = () => {
    deleteProduct(id);
    setModalVisible(false);
    navigate('/menu-produto');
  };

  if (!produto) {
    return <Layout title="Carregando..."><p>Carregando detalhes do produto...</p></Layout>;
  }

  return (
    <Layout title="PRODUTO">
      <div className="content">
        <form className="all-form">
          <FormInput
            label="Nome"
            id="nome"
            name="nome"
            value={produto.nome}
            readOnly
          />
          <FormInput
            label="Tipo"
            id="tipo"
            name="tipo"
            value={produto.tipo}
            readOnly
          />
          <FormInput
            label="Quantidade"
            id="quantidade"
            name="quantidade"
            value={produto.quantidade}
            readOnly
          />
          <FormInput
            label="Preço"
            id="preco"
            name="preco"
            value={produto.preco}
            readOnly
          />
          <FormInput
            label="Lote"
            id="lote"
            name="lote"
            value={produto.lote}
            readOnly
          />
        </form>
        <div className="button-container">
          <button type="button" className="delete-button" onClick={handleDelete}>Deletar</button>
          <button type="button" className="update-button" onClick={handleUpdate}>Atualizar</button>
        </div>
      </div>
      

      
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="DELETAR PRODUTO"
        content={
          <>
            <p>Você está prestes a <span className="delete-text">deletar</span> o produto "<span id="product-name">{produto.nome}</span>" do sistema. Esta ação é irreversível.</p>
            <p>Detalhes do Produto:</p>
            <ul>
              <li>Nome: <span id="product-detail-name">{produto.nome}</span></li>
              <li>Tipo: <span id="product-detail-type">{produto.tipo}</span></li>
            </ul>
            <p>Tem certeza que deseja proceder com a exclusão?</p>
          </>
        }
        onConfirm={handleConfirmarExclusao}
      />
    </Layout>
  );
};

export default DetalheProduto;