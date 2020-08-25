import React from 'react';

export const Button = ({
  text,
  classes,
  handleClick,
  disabled = false,
  children,
}) => {
  return (
    <button className={classes} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};
