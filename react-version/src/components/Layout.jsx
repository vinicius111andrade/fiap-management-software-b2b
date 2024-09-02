import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './BackButton';

const Layout = ({ children, title, showBackButton = true, onBackClick, onUpdate, onDelete }) => {
  return (
    <div>
      <main>
        {showBackButton && <BackButton onClick={onBackClick} />}
        <h2 className="menu-title">{title}</h2>
        <hr className="menu-divider menu-divider-80" />
        <div className="content">
          {children}
          <div className="form-buttons">
            {onDelete && (
              <button className="cancel-button" onClick={onDelete}>
                Deletar
              </button>
            )}
            {onUpdate && (
              <button className="save-button" onClick={onUpdate}>
                Atualizar
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  onBackClick: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Layout;