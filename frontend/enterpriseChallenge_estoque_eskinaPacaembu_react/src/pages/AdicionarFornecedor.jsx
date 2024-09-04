import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSuppliers } from '../contexts/SupplierContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';

const AdicionarFornecedor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { suppliers, addSupplier, updateSupplier } = useSuppliers();
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    endereco: '',
    telefone: ''
  });

  useEffect(() => {
    if (id) {
      const supplierToEdit = suppliers.find(s => s.id === id);
      if (supplierToEdit) {
        setFornecedor(supplierToEdit);
      }
    }
  }, [id, suppliers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor(prevFornecedor => ({
      ...prevFornecedor,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateSupplier(fornecedor);
    } else {
      addSupplier(fornecedor);
    }
    navigate('/menu-fornecedor');
  };

  const handleCancel = () => {
    navigate('/menu-fornecedor');
  };

  return (
    <Layout title={id ? "EDITAR FORNECEDOR" : "ADICIONAR FORNECEDOR"}>
      <Form onSubmit={handleSubmit} onCancel={handleCancel}>
        <FormInput
          label="Nome"
          id="nome"
          name="nome"
          value={fornecedor.nome}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Endereço"
          id="endereco"
          name="endereco"
          value={fornecedor.endereco}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Telefone"
          id="telefone"
          name="telefone"
          type="tel"
          value={fornecedor.telefone}
          onChange={handleChange}
          required
        />
      </Form>
    </Layout>
  );
};

export default AdicionarFornecedor;