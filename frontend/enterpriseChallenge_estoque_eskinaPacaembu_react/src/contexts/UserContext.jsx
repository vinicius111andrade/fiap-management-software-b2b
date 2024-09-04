import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Carregar usuários do localStorage ao iniciar
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now().toString() };
    saveUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map(u => 
      u.id === updatedUser.id ? updatedUser : u
    );
    saveUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const filteredUsers = users.filter(u => u.id !== userId);
    saveUsers(filteredUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};