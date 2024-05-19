// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuUsuario from './components/MenuUsuario';
import MenuPrincipal from './components/MenuPrincipal';
import MenuProduto from './components/MenuProduto';
import './css/App.css'; // Importando o CSS global

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />  {/* Rota inicial */}
        <Route path="/menu-usuario" element={<MenuUsuario />} />
        <Route path="/menu-principal" element={<MenuPrincipal />} />
        <Route path="/menu-produto" element={<MenuProduto />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default App;
