import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import backArrow from '../assets/img/back-arrow.png';
import Header from '../components/Header';

const AdicionarPedido = () => {
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const [usuario, setUsuario] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSalvar = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados do pedido (substitua com sua implementação)
    console.log('Dados do Pedido:', { data, usuario, produto, quantidade });
    navigate('/menu-pedido'); 
  };

  const handleCancelar = () => {
    navigate('/menu-pedido'); 
  };

  return (
    <div>
      <Header />
      <main>
        <div className="back-button">
          <button onClick={handleCancelar}>
            <img src={backArrow} alt="Voltar" />
          </button>
        </div>
        <hr className="menu-divider menu-divider-100" />
        <h2 className="menu-title">PEDIDO</h2> 
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <form className="all-form" onSubmit={handleSalvar}>
            <label htmlFor="data">Data *</label>
            <input
              type="date" 
              id="data"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />

            <label htmlFor="usuario">Usuário *</label>
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required 
            />

            <label htmlFor="produto">Produto *</label>
            <input
              type="text" 
              id="produto" 
              name="produto" 
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              required
            />

            <label htmlFor="quantidade">Quantidade *</label>
            <input
              type="number" 
              id="quantidade" 
              name="quantidade" 
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />

            <div className="form-buttons">
              <button type="button" className="cancel-button" onClick={handleCancelar}>Cancelar</button>
              <button type="submit" className="save-button">Salvar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdicionarPedido;
