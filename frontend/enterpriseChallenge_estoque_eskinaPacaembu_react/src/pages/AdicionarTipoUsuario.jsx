import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserTypes } from '../contexts/UserTypeContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarTipoUsuario = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userTypes, addUserType, updateUserType } = useUserTypes();
  const [userType, setUserType] = useState({ nome: '' });

  useEffect(() => {
    if (id) {
      const userTypeToEdit = userTypes.find(ut => ut.id === id);
      if (userTypeToEdit) {
        setUserType(userTypeToEdit);
      }
    }
  }, [id, userTypes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserType(prevUserType => ({
      ...prevUserType,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUserType(userType);
    } else {
      addUserType(userType);
    }
    navigate('/menu-tipo-usuario');
  };

  const handleCancel = () => {
    navigate('/menu-tipo-usuario');
  };

  return (
    <Layout title={id ? "EDITAR TIPO DE USUÁRIO" : "ADICIONAR TIPO DE USUÁRIO"}>
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Nome"
          id="nome"
          name="nome"
          type="text"
          value={userType.nome}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarTipoUsuario;