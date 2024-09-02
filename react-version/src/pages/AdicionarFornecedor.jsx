import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarFornecedor = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nome: '',
    endereco: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar os dados do fornecedor
    console.log('Dados do fornecedor:', values);
    navigate('/menu-fornecedor');
  };

  return (
    <Layout title="FORNECEDOR">
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Nome"
          id="nome"
          name="nome"
          value={values.nome}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Endereço"
          id="endereco"
          name="endereco"
          value={values.endereco}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Telefone"
          id="telefone"
          name="telefone"
          type="tel"
          value={values.telefone}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarFornecedor;