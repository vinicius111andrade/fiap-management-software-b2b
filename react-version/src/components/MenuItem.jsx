import React from 'react';

const MenuItem = ({ item, onDelete, detailPath, IconComponent }) => (
  <div className="item">
    <a href={detailPath} className="all-link">
      <IconComponent />
      <span>{item.nome}</span>
    </a>
    <button
      className="delete-button"
      onClick={() => onDelete(item)}
    >
      Deletar
    </button>
  </div>
);

export default MenuItem;