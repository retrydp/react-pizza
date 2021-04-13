import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <div
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
