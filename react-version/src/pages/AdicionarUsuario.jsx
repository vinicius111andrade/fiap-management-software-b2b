import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import backArrow from '../assets/img/back-arrow.png';
import Header from '../components/Header';

const AdicionarUsuario = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState(''); // Novo estado para o tipo de usuário

  const handleSalvar = (e) => {
    e.preventDefault();
    // Lógica para salvar os dados do usuário (substitua com sua implementação)
    console.log('Dados do usuário:', { nome, tipo });
    navigate('/menu-usuario');
  };

  const handleCancelar = () => {
    navigate('/menu-usuario');
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
        <h2 className="menu-title">USUÁRIO</h2>
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

            <label htmlFor="tipo">Tipo de Usuário *</label>
            <select id="tipo" name="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
              <option value="">Selecione</option>
              <option value="administrador">Administrador</option>
              <option value="funcionario">Funcionário</option>
              {/* Adicione mais opções conforme necessário */}
            </select>

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

export default AdicionarUsuario;
