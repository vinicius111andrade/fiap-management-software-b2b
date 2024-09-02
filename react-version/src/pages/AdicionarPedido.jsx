import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarPedido = () => {
  const navigate = useNavigate();
  const [pedido, setPedido] = useState({
    data: '',
    usuario: '',
    produto: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido(prevPedido => ({
      ...prevPedido,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Pedido:', pedido);
    navigate('/menu-pedido');
  };

  const handleCancel = () => {
    navigate('/menu-pedido');
  };

  return (
    <Layout title="PEDIDO">
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Data"
          id="data"
          name="data"
          type="date"
          value={pedido.data}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Usuário"
          id="usuario"
          name="usuario"
          type="text"
          value={pedido.usuario}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Produto"
          id="produto"
          name="produto"
          type="text"
          value={pedido.produto}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Quantidade"
          id="quantidade"
          name="quantidade"
          type="number"
          value={pedido.quantidade}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarPedido;