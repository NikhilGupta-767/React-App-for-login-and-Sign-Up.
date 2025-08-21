import React from 'react';

const InputField = ({ label, type = 'text', name, value, onChange, error, showLabel=true }) => (
  <div className="input-group">
    <div className="inputBox">
    {showLabel && <label for={label}>{label}</label>}
    <input
      id= {label} 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
      placeholder={!showLabel && label}
    />
    </div>
    {error && <span className="error">{error}</span>}
  </div>
);

export default InputField;
