import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, isAuthenticated, error, clearErrors } = authContext;

  // Checking to see if we're authenticated - so we don't go to this page if we're already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    // Checking for authentication error
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
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
            required
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          ></input>
        </div>
        <button
          tpye='submit'
          value='Login'
          className='btn btn-primary btn-block'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
