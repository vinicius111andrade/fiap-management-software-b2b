import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage on start
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  const saveOrders = (updatedOrders) => {
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const addOrder = (order) => {
    const newOrder = { ...order, id: Date.now().toString() };
    saveOrders([...orders, newOrder]);
  };

  const updateOrder = (updatedOrder) => {
    const updatedOrders = orders.map(o => 
      o.id === updatedOrder.id ? updatedOrder : o
    );
    saveOrders(updatedOrders);
  };

  const deleteOrder = (orderId) => {
    const filteredOrders = orders.filter(o => o.id !== orderId);
    saveOrders(filteredOrders);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};