import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarProduto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, addProduct, updateProduct } = useProducts();
  const [produto, setProduto] = useState({
    nome: '',
    tipo: '',
    quantidade: '',
    preco: '',
    lote: ''
  });

  useEffect(() => {
    if (id) {
      const productToEdit = products.find(p => p.id === id);
      if (productToEdit) {
        setProduto(productToEdit);
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto(prevProduto => ({
      ...prevProduto,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateProduct(produto);
    } else {
      addProduct(produto);
    }
    navigate('/menu-produto');
  };

  const handleCancel = () => {
    navigate('/menu-produto');
  };

  return (
    <Layout title={id ? "EDITAR PRODUTO" : "ADICIONAR PRODUTO"}>
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Nome"
          id="nome"
          name="nome"
          type="text"
          value={produto.nome}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Tipo"
          id="tipo"
          name="tipo"
          type="text"
          value={produto.tipo}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Quantidade"
          id="quantidade"
          name="quantidade"
          type="number"
          value={produto.quantidade}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Preço"
          id="preco"
          name="preco"
          type="number"
          step="0.01"
          value={produto.preco}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Lote"
          id="lote"
          name="lote"
          type="text"
          value={produto.lote}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarProduto;