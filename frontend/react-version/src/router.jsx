// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import MenuPrincipal from './pages/MenuPrincipal.jsx';
import MenuProduto from './pages/MenuProduto.jsx';
import AdicionarProduto from './pages/AdicionarProduto.jsx';
import DetalheProduto from './pages/DetalheProduto.jsx'; 
import MenuFornecedor from './pages/MenuFornecedor.jsx';
import AdicionarFornecedor from './pages/AdicionarFornecedor.jsx';
import DetalheFornecedor from './pages/DetalheFornecedor.jsx'; 
import MenuUsuario from './pages/MenuUsuario.jsx';
import AdicionarUsuario from './pages/AdicionarUsuario.jsx';
import DetalheUsuario from './pages/DetalheUsuario.jsx'; 
import AdicionarTipoUsuario from './pages/AdicionarTipoUsuario.jsx'; 
import MenuPedido from './pages/MenuPedido.jsx';
import AdicionarPedido from './pages/AdicionarPedido.jsx';
import DetalhePedido from './pages/DetalhePedido.jsx'; // Importando o componente de detalhes do produto

import './styles/styles.scss'; // Importando o CSS global

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
