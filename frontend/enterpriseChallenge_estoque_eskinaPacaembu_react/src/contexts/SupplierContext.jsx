import React, { createContext, useContext, useState, useEffect } from 'react';

const SupplierContext = createContext();

export const useSuppliers = () => useContext(SupplierContext);

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Carregar fornecedores do localStorage ao iniciar
    const storedSuppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    setSuppliers(storedSuppliers);
  }, []);

  const saveSuppliers = (updatedSuppliers) => {
    setSuppliers(updatedSuppliers);
    localStorage.setItem('suppliers', JSON.stringify(updatedSuppliers));
  };

  const addSupplier = (supplier) => {
    const newSupplier = { ...supplier, id: Date.now().toString() };
    saveSuppliers([...suppliers, newSupplier]);
  };

  const updateSupplier = (updatedSupplier) => {
    const updatedSuppliers = suppliers.map(s => 
      s.id === updatedSupplier.id ? updatedSupplier : s
    );
    saveSuppliers(updatedSuppliers);
  };

  const deleteSupplier = (supplierId) => {
    const filteredSuppliers = suppliers.filter(s => s.id !== supplierId);
    saveSuppliers(filteredSuppliers);
  };

  return (
    <SupplierContext.Provider value={{ suppliers, addSupplier, updateSupplier, deleteSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};