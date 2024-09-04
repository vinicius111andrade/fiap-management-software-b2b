import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrders } from '../contexts/OrderContext';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

const AdicionarPedido = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { orders, addOrder, updateOrder } = useOrders();
  const [pedido, setPedido] = useState({
    data: '',
    usuario: '',
    produto: '',
    quantidade: ''
  });

  useEffect(() => {
    if (id) {
      const orderToEdit = orders.find(o => o.id === id);
      if (orderToEdit) {
        setPedido(orderToEdit);
      }
    }
  }, [id, orders]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido(prevPedido => ({
      ...prevPedido,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateOrder({...pedido, id}); // Ensure id is included for updates
    } else {
      addOrder(pedido);
    }
    navigate('/menu-pedido');
  };

  const handleCancel = () => {
    navigate('/menu-pedido');
  };

  return (
    <Layout title={id ? "EDITAR PEDIDO" : "ADICIONAR PEDIDO"}>
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