import React from 'react';
import {ErrorMessage} from "formik";

const Input = ({type = 'text', placeholder, name, onBlur, onChange, value}) => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    }}>
      <input
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        className={'input-ui'}
        type={type}
        placeholder={placeholder}
      />
      <div className='error-text'>
        <ErrorMessage name={name}/>
      </div>
    </div>

);
};

export default Input;