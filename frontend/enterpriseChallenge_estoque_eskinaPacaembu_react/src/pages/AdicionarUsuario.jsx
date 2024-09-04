import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUsers } from '../contexts/UserContext';
import { useUserTypes } from '../contexts/UserTypeContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const AdicionarUsuario = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users, addUser, updateUser } = useUsers();
  const { userTypes } = useUserTypes();
  const [usuario, setUsuario] = useState({
    nome: '',
    tipo: ''
  });

  useEffect(() => {
    if (id) {
      const userToEdit = users.find(u => u.id === id);
      if (userToEdit) {
        setUsuario(userToEdit);
      }
    }
  }, [id, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUser(usuario);
    } else {
      addUser(usuario);
    }
    navigate('/menu-usuario');
  };

  const handleCancel = () => {
    navigate('/menu-usuario');
  };

  const handleManageUserTypes = () => {
    navigate('/menu-tipo-usuario');
  };

  const tipoOptions = userTypes.map(type => ({
    value: type.id,
    label: type.nome
  }));

  return (
    <Layout title={id ? "EDITAR USUÁRIO" : "ADICIONAR USUÁRIO"}>
      <div className="action-buttons">
      <a href="/menu-tipo-usuario" className="other-button">Gerenciar Tipos de Usuário</a>
      </div>
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