// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPrincipal from './pages/MenuPrincipal';
import MenuProduto from './pages/MenuProduto';
import AdicionarProduto from './pages/AdicionarProduto';
import DetalheProduto from './pages/DetalheProduto'; 
import MenuFornecedor from './pages/MenuFornecedor';
import AdicionarFornecedor from './pages/AdicionarFornecedor';
import DetalheFornecedor from './pages/DetalheFornecedor'; 
import MenuUsuario from './pages/MenuUsuario';
import AdicionarUsuario from './pages/AdicionarUsuario';
import DetalheUsuario from './pages/DetalheUsuario'; 
import AdicionarTipoUsuario from './pages/AdicionarTipoUsuario.jsx'; 
import MenuPedido from './pages/MenuPedido';
import AdicionarPedido from './pages/AdicionarPedido';
import DetalhePedido from './pages/DetalhePedido'; // Importando o componente de detalhes do produto




import './css/App.css'; // Importando o CSS global

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />  {/* Rota inicial */}
        <Route path="/menu-produto" element={<MenuProduto />} />
        <Route path="/adicionar-produto" element={<AdicionarProduto />} /> 
        <Route path="/detalhe-produto" element={<DetalheProduto />} /> 
        <Route path="/menu-fornecedor" element={<MenuFornecedor />} />
        <Route path="/adicionar-fornecedor" element={<AdicionarFornecedor />} /> 
        <Route path="/detalhe-fornecedor" element={<DetalheFornecedor />} /> 
        <Route path="/menu-usuario" element={<MenuUsuario />} />
        <Route path="/adicionar-usuario" element={<AdicionarUsuario />} /> 
        <Route path="/detalhe-usuario" element={<DetalheUsuario />} /> 
        <Route path="/adicionar-tipo-usuario" element={<AdicionarTipoUsuario />} />
        <Route path="/menu-pedido" element={<MenuPedido />} />
        <Route path="/adicionar-pedido" element={<AdicionarPedido />} /> {/* Rota para adicionar produto */}
        <Route path="/detalhe-pedido" element={<DetalhePedido />} /> {/* Nova rota para detalhes do produto */}
      </Routes>
    </Router>
  );
};

export default App;
