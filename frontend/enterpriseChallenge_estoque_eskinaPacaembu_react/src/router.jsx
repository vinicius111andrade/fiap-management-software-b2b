import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import { OrderProvider } from './contexts/OrderContext';
import { UserProvider } from './contexts/UserContext';
import { UserTypeProvider } from './contexts/UserTypeContext';
import { SupplierProvider } from './contexts/SupplierContext';
import AppLayout from './components/AppLayout';
import MenuPrincipal from './pages/MenuPrincipal.jsx';

//Test Routes
import TestGetRequestDemo from './pages/TestGetRequestDemo.jsx';
import TestGetRequestListarProdutos from './pages/TestGetRequestListarProdutos.jsx';
import TestGetRequestListarProdutosPorId from './pages/TestGetRequestListarProdutosPorId.jsx';
import TestPostRequestCadastrarProduto from './pages/TestPostRequestCadastrarProduto.jsx';
import TestPutRequestAlterarProduto from './pages/TestPutRequestAlterarProduto.jsx';
import TestDelRequestDeletarProduto from './pages/TestDelRequestDeletarProduto.jsx';

// Product routes
import MenuProduto from './pages/MenuProduto.jsx';
import AdicionarProduto from './pages/AdicionarProduto.jsx';
import DetalheProduto from './pages/DetalheProduto.jsx';

// Order routes
import MenuPedido from './pages/MenuPedido.jsx';
import AdicionarPedido from './pages/AdicionarPedido.jsx';
import DetalhePedido from './pages/DetalhePedido.jsx';

// Supplier routes
import MenuFornecedor from './pages/MenuFornecedor.jsx';
import AdicionarFornecedor from './pages/AdicionarFornecedor.jsx';
import DetalheFornecedor from './pages/DetalheFornecedor.jsx';

// User routes
import MenuUsuario from './pages/MenuUsuario.jsx';
import AdicionarUsuario from './pages/AdicionarUsuario.jsx';
import DetalheUsuario from './pages/DetalheUsuario.jsx';

// User Type routes
import MenuTipoUsuario from './pages/MenuTipoUsuario.jsx';
import AdicionarTipoUsuario from './pages/AdicionarTipoUsuario.jsx';

import './styles/styles.scss';

const App = () => {
  return (
  <SupplierProvider>
    <ProductProvider>
      <OrderProvider>
        <UserProvider>
          <UserTypeProvider>
            <Router>
              <Routes>
                <Route element={<AppLayout />}>
                  {/* Main Menu */}
                  <Route path="/" element={<MenuPrincipal />} />


                  {/* Test Routes */}
                  <Route path="/TestGetRequestDemo" element={<TestGetRequestDemo />} />
                  <Route path="/TestGetRequestListarProdutos" element={<TestGetRequestListarProdutos />} />
                  <Route path="/TestGetRequestListarProdutosPorId" element={<TestGetRequestListarProdutosPorId />} />
                  <Route path="/TestPostRequestCadastrarProduto" element={<TestPostRequestCadastrarProduto />} />
                  <Route path="/TestPutRequestAlterarProduto" element={<TestPutRequestAlterarProduto />} />
                  <Route path="/TestDelRequestDeletarProduto" element={<TestDelRequestDeletarProduto />} />

                  {/* Product Routes */}
                  <Route path="/menu-produto" element={<MenuProduto />} />
                  <Route path="/menu-produto" element={<MenuProduto />} />
                  <Route path="/adicionar-produto" element={<AdicionarProduto />} />
                  <Route path="/adicionar-produto/:id" element={<AdicionarProduto />} />
                  <Route path="/detalhe-produto/:id" element={<DetalheProduto />} />

                  {/* Order Routes */}
                  <Route path="/menu-pedido" element={<MenuPedido />} />
                  <Route path="/adicionar-pedido" element={<AdicionarPedido />} />
                  <Route path="/adicionar-pedido/:id" element={<AdicionarPedido />} />
                  <Route path="/detalhe-pedido/:id" element={<DetalhePedido />} />

                  {/* Supplier Routes */}
                  <Route path="/menu-fornecedor" element={<MenuFornecedor />} />
                  <Route path="/adicionar-fornecedor" element={<AdicionarFornecedor />} />
                  <Route path="/adicionar-fornecedor/:id" element={<AdicionarFornecedor />} />
                  <Route path="/detalhe-fornecedor/:id" element={<DetalheFornecedor />} />

                  {/* User Routes */}
                  <Route path="/menu-usuario" element={<MenuUsuario />} />
                  <Route path="/adicionar-usuario" element={<AdicionarUsuario />} />
                  <Route path="/adicionar-usuario/:id" element={<AdicionarUsuario />} />
                  <Route path="/detalhe-usuario/:id" element={<DetalheUsuario />} />

                  {/* User Type Routes */}
                  <Route path="/menu-tipo-usuario" element={<MenuTipoUsuario />} />
                  <Route path="/adicionar-tipo-usuario" element={<AdicionarTipoUsuario />} />
                  <Route path="/adicionar-tipo-usuario/:id" element={<AdicionarTipoUsuario />} />
                </Route>
              </Routes>
            </Router>
          </UserTypeProvider>
        </UserProvider>
      </OrderProvider>
    </ProductProvider>
  </SupplierProvider>
  );
};

export default App;
