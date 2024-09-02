import React from 'react';
import backArrow from '../assets/img/back-arrow.png';

const BackButton = () => (
  <div className="back-button">
    <a href="./">
      <img src={backArrow} alt="Voltar" />
    </a>
  </div>
);

export default BackButton;