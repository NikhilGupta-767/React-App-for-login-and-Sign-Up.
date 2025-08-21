import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import { validateUsername, validatePassword } from '../utils/validation';

const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errs = {
      username: validateUsername(userData.username),
      password: validatePassword(userData.password, userData.username),
    };
    setErrors(errs);
    if (!errs.username && !errs.password) {
      alert("Login successful");
    }
  };

  return (
    <div className="form-container">
      <div className="titleBox">
        <div className="title">Login</div>
        <p className="subTitle">Sign in to continue</p>
      </div>
      <div className="form-body">
        <form onSubmit={handleLogin}>
          <InputField label="USERNAME" name="username" value={userData.username} onChange={handleChange} error={errors.username} />
          <InputField label="NEW PASSWORD" type="password" name="password" value={userData.password} onChange={handleChange} error={errors.password} />
          <button type="submit">LOGIN</button>
          <p className="footer">Don't have Account? <Link to="/signup">SignUp</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
