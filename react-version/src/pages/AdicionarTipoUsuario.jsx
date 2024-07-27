import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import backArrow from '../assets/img/back-arrow.png';
import Header from '../components/Header';

const AdicionarTipoUsuario = () => {
  const navigate = useNavigate();
  const [cargo, setCargo] = useState('');

  const handleSalvar = (e) => {
    e.preventDefault();
    // Lógica para salvar o cargo (substitua com sua implementação)
    console.log('Cargo:', cargo);
    navigate('/menu-tipo-usuario'); 
  };

  const handleCancelar = () => {
    navigate('/detalhe-usuario'); // Redireciona para detalhe-usuario
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
        <h2 className="menu-title">ADICIONAR CARGO</h2> 
        <hr className="menu-divider menu-divider-80" />

        <div className="content">
          <form className="all-form" onSubmit={handleSalvar}>
            <label htmlFor="cargo">Cargo *</label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
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

export default AdicionarTipoUsuario;
