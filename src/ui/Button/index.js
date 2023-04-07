import React from 'react';

const Button = ({children, fontSize, bg = 'light'}) => {
  return (
    <button style={{
      fontSize: fontSize + 'px',
      background: bg === 'light' ? '#2AB057' : '#FFFFFF',
      color:  bg === 'light' ? '#FFFFFF' : '#2AB057',
    }}
      className='green-btn'>
      {children}
    </button>
  );
};

export default Button;