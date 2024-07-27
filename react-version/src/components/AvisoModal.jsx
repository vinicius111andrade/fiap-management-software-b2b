// ModalAviso.jsx
import React, { useState } from 'react';

const ModalAviso = ({ produtoNome, produtoTipo, onFechar, onConfirmar }) => {
  return (
    <div id="modal-aviso" className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onFechar}>&times;</span>
        <h2>DELETAR PRODUTO</h2>
        <p>
          Você está prestes a <span className="delete-text">deletar</span> o produto "
          <span id="product-name">{produtoNome}</span>" do sistema. Esta ação é irreversível.
        </p>
        <p>Detalhes do Produto:</p>
        <ul>
          <li>Nome: <span id="product-detail-name">{produtoNome}</span></li>
          <li>Tipo: <span id="product-detail-type">{produtoTipo}</span></li>
        </ul>
        <p>Tem certeza que deseja proceder com a exclusão?</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onFechar}>Cancelar</button>
          <button className="confirm-button" onClick={onConfirmar}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAviso;
