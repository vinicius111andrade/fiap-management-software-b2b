import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarTipoUsuario = () => {
  const navigate = useNavigate();
  const [cargo, setCargo] = useState('');

  const handleChange = (e) => {
    setCargo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Novo Tipo de Usuário:', cargo);
    navigate('/adicionar-usuario');
  };

  const handleCancel = () => {
    navigate('/adicionar-usuario');
  };

  return (
    <Layout title="ADICIONAR CARGO">
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Cargo"
          id="cargo"
          name="cargo"
          type="text"
          value={cargo}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarTipoUsuario;