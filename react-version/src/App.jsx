// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipal from './components/MenuPrincipal';
import MenuUsuario from './components/MenuUsuario';
import MenuProduto from './components/MenuProduto';
import AdicionarProduto from './components/AdicionarProduto';
import DetalheProduto from './components/DetalheProduto'; // Importando o componente de detalhes do produto
import './css/App.css'; // Importando o CSS global

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />  {/* Rota inicial */}
        <Route path="/menu-usuario" element={<MenuUsuario />} />
        <Route path="/menu-produto" element={<MenuProduto />} />
        <Route path="/adicionar-produto" element={<AdicionarProduto />} /> {/* Rota para adicionar produto */}
        <Route path="/detalhe-produto" element={<DetalheProduto />} /> {/* Nova rota para detalhes do produto */}
      </Routes>
    </Router>
  );
};

export default App;
