import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validatePhone
} from '../utils/validation';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
      password: validatePassword(form.password, form.username),
      confirmPassword: validateConfirmPassword(form.confirmPassword, form.password)
    };
    setErrors(errs);
    if (Object.values(errs).every((val) => val === '')) {
      alert("Account created successfully");
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <div className="titleBox">
        <div className="titleSecondary">Create New Account</div>
      </div>
      <div className="form-body form-signup">
        <form onSubmit={handleSubmit}>
          <InputField label="NAME" name="name" value={form.name} onChange={handleChange} error={errors.name} showLabel={false}/>
          <InputField label="USERNAME" name="username" value={form.username} onChange={handleChange} error={errors.username} showLabel={false} />
          <InputField label="EMAIL" name="email" value={form.email} onChange={handleChange} error={errors.email} showLabel={false} />
          <InputField label="PHONE NO." name="phone" value={form.phone} onChange={handleChange} error={errors.phone} showLabel={false} />
          <InputField label="NEW PASSWORD" type="password" name="password" value={form.password} onChange={handleChange} error={errors.password} />
          <InputField label="CONFIRM NEW PASSWORD" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
          <div className="actions">
            <button className="signUpButton" type="submit">SIGN UP</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
