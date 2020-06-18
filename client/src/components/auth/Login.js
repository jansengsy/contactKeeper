import React, { useState, useContext } from 'react';
import AuthContext from '../../Context/auth/authContext';

export const Login = () => {
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const { login } = authContext;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          ></input>
        </div>
        <input
          tpye='submit'
          value='Login'
          className='btn btn-primary btn-block'
        ></input>
      </form>
    </div>
  );
};

export default Login;
