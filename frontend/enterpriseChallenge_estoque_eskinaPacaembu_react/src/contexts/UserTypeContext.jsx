import React, { createContext, useContext, useState, useEffect } from 'react';

const UserTypeContext = createContext();

export const useUserTypes = () => useContext(UserTypeContext);

export const UserTypeProvider = ({ children }) => {
  const [userTypes, setUserTypes] = useState([]);

  useEffect(() => {
    // Carregar tipos de usuário do localStorage ao iniciar
    const storedUserTypes = JSON.parse(localStorage.getItem('userTypes') || '[]');
    setUserTypes(storedUserTypes);
  }, []);

  const saveUserTypes = (updatedUserTypes) => {
    setUserTypes(updatedUserTypes);
    localStorage.setItem('userTypes', JSON.stringify(updatedUserTypes));
  };

  const addUserType = (userType) => {
    const newUserType = { ...userType, id: Date.now().toString() };
    saveUserTypes([...userTypes, newUserType]);
  };

  const updateUserType = (updatedUserType) => {
    const updatedUserTypes = userTypes.map(ut => 
      ut.id === updatedUserType.id ? updatedUserType : ut
    );
    saveUserTypes(updatedUserTypes);
  };

  const deleteUserType = (userTypeId) => {
    const filteredUserTypes = userTypes.filter(ut => ut.id !== userTypeId);
    saveUserTypes(filteredUserTypes);
  };

  return (
    <UserTypeContext.Provider value={{ userTypes, addUserType, updateUserType, deleteUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};