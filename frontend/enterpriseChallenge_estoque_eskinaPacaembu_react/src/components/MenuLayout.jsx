import React from 'react';
import BackButton from './BackButton';

const MenuLayout = ({ title, children, onBackClick }) => {
  return (
    <div>
      <main>
        <BackButton onClick={onBackClick} />
        <h2 className="menu-title">{title}</h2>
        <hr className="menu-divider menu-divider-80" />
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MenuLayout;