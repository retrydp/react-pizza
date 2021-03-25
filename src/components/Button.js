import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className }) => {
  return <div className={classNames('button', className)}>{children}</div>;
};

export default Button;
