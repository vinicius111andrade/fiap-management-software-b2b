import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const AdicionarUsuario = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: '',
    tipo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Usuário:', usuario);
    navigate('/menu-usuario');
  };

  const handleCancel = () => {
    navigate('/menu-usuario');
  };

  const tipoOptions = [
    { value: 'administrador', label: 'Administrador' },
    { value: 'funcionario', label: 'Funcionário' },
    // Adicione mais tipos conforme necessário
  ];

  return (
    <Layout title="USUÁRIO">
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Nome"
          id="nome"
          name="nome"
          type="text"
          value={usuario.nome}
          onChange={handleChange}
          required
        />
        <FormSelect
          label="Tipo de Usuário"
          id="tipo"
          name="tipo"
          value={usuario.tipo}
          onChange={handleChange}
          options={tipoOptions}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarUsuario;