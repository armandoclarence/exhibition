import React, { useState, useEffect } from 'react';
import login from './loginService';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/login.css'
import passwordHide from '../assets/img/password-hide.png'
import { jwtDecode } from 'jwt-decode';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [token, setToken] = useLocalStorage('', 'jwt');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const togglePassword = (e) => {
    const prevSibling = e.target.previousElementSibling
    console.log(e)
    if(prevSibling.type === 'password') prevSibling.type = 'text'
    else prevSibling.type = 'password'
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await login(email, password);
      setToken(token); 
      //this token is userDeatils
      const user_1 = jwtDecode(token);
      setUser(user_1);
      //this user object need to available for all the things
      console.log('user:', user_1);

      console.log("Usertype_id " + user_1.user_type_id);
      console.log("user email " + user_1.sub);
      console.log('Logged in with token:', token);
      
    } catch (error) {
      console.error('Login failed:', error);
      alert('Email or Password invalid!')
    }
  };
  useEffect(()=> {
    if(user.user_type_id === 1){
        navigate('/admin')
    }else if(user.user_type_id === 2){
      navigate('/exhibitor')
    }else if(user.user_type_id === 3){
      navigate('/stall')
    }
    console.log(user)
  },[user,navigate])
  return (
    <div className='loginPage'>
      <div className='wave'></div>
      <div className='sign-in'>
        <form id='login' className='signForm' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='login-input'>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className='pass'>
              <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <img onClick={togglePassword} src={passwordHide} alt='invisible' />
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