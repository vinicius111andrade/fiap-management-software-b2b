import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items, onDelete, detailPath, IconComponent }) => (
  <div className="list">
    {items.map((item, index) => (
      <MenuItem
        key={index}
        item={item}
        onDelete={onDelete}
        detailPath={detailPath}
        IconComponent={IconComponent}
      />
    ))}
  </div>
);

export default MenuList;