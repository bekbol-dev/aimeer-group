import React from 'react';

const Input = ({type = 'text', placeholder}) => {
  return (
    <input
      className={'input-ui'}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;