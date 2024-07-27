import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import logoskina from '../assets/img/logoskina.png';
import backArrow from '../assets/img/back-arrow.png';
import Header from '../components/Header';

const AdicionarFornecedor = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSalvar = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar os dados do fornecedor
    console.log('Dados do fornecedor:', { nome, endereco, telefone });

    navigate('/menu-fornecedor'); // Volta para a página anterior após salvar
  };

  const handleCancelar = () => {
    navigate('/menu-fornecedor'); // Volta para a página anterior ao cancelar
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
        <h2 className="menu-title">FORNECEDOR</h2>
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <form className="all-form" onSubmit={handleSalvar}>
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label htmlFor="endereco">Endereço *</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />

            <label htmlFor="telefone">Telefone *</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />

            <div className="form-buttons">
              <button type="button" className="cancel-button" onClick={handleCancelar}>
                Cancelar
              </button>
              <button type="submit" className="save-button">Salvar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdicionarFornecedor;
