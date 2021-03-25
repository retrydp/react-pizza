import React from 'react';
import classNames from 'classnames';

const Button = ({ className, outline, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames('button', className, { 'button--outline': outline })}>
      {children}
    </div>
  );
};

export default Button;
