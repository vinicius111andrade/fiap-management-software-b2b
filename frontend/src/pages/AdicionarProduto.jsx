import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const DataFetcher = () => {
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setData(data);
            setLoading(false);
            navigate('/menu-produto');
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
  }, []);

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

  const tipoOptions = [
    { value: 'tipo1', label: 'Tipo 1' },
    { value: 'tipo2', label: 'Tipo 2' },
  ];

  const loteOptions = [
    { value: 'lote1', label: 'Lote 1' },
    { value: 'lote2', label: 'Lote 2' },
  ];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

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
        <FormSelect
          label="Tipo"
          id="tipo"
          name="tipo"
          value={produto.tipo}
          onChange={handleChange}
          options={tipoOptions}
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
        <FormSelect
          label="Lote"
          id="lote"
          name="lote"
          value={produto.lote}
          onChange={handleChange}
          options={loteOptions}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarProduto;
