import React, { useState } from 'react';
import login from './loginService';
import '../styles/login.css'
import passwordHide from '../assets/img/password-hide.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await login(email, password);
      console.log('Logged in user:', user);
      console.log(user.userId);
      console.log(user.sub)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='loginPage'>
      <div className='wave'></div>
      <div className='sign-in'>
        <form id='login' className='signForm' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='login-input'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className='pass'>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <img src={passwordHide} alt='invisible' />
            </div>
          </div>
          <div className='forgot-pass'>Forgot Password?</div>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href='/register'>Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;