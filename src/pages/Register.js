import React, { useState } from 'react'
import '../styles/login.css'
import '../styles/register.css'
import passwordHide from '../assets/img/password-hide.png'
import { registerUser } from './registerService.js';

function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    user_type_id: 0
    });

    const handleChange = (e) => {
      if (e.target.id === 'exhibitor') {
          setUser({
              ...user,
              user_type_id: 2
          });
      } else if (e.target.id === 'user') {
          setUser({
              ...user,
              user_type_id: 3
          });
      } else {
          setUser({
              ...user,
              [e.target.id]: e.target.value
          });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(user).then(data => console.log(data));
  };

  return (
    // ...
    <form id='signup' className='signForm' onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div className='login-input'>
        <div className='username'>
          <input type='text' id='firstname' placeholder='First Name' onChange={handleChange} required />
          <input type='text' id='lastname' placeholder='Last Name' onChange={handleChange} required />
        </div>
        <input type='tel' id='mobile' placeholder='Mobile' onChange={handleChange} required />
        <input type='email' id='email' placeholder='Email' onChange={handleChange} required />
        <div className='pass'>
          <input id='password' type='password' placeholder='Password' onChange={handleChange} required />
          <img src={passwordHide} alt='invisible' />
        </div>
        <div className='type-acc'>
        <div className='exhibitor'>
          <input type='radio' name='typeAcc' id='exhibitor' onChange={handleChange} required />
          <label htmlFor='exhibitor'>Exhibitor</label>
          </div>
        <div className='user'>
          <input type='radio' name='typeAcc' id='user' onChange={handleChange} required />
          <label htmlFor='user'>User</label>
        </div>
        </div>
      </div>
      <button type='submit'>Sign Up</button>
      <p>Already have an account? <a href='/'>Login</a></p>
    </form>
    // ...
  )
}

export default Register