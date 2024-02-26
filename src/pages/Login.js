import React from 'react'
import '../styles/login.css'
import passwordHide from '../assets/img/password-hide.png'

function Login() {
  return (
    <div className='loginPage'>
      <div className='wave'></div>
      <div className='sign-in'>
        <form id='login' className='signForm'>
          <h1>Login</h1>
          <div className='login-input'>
            <input id='username' type='text' placeholder='Username' />
            <div className='pass'>
              <input id='password' type='password' placeholder='Password' />
              <img src={passwordHide} alt='invisible' />
            </div>
          </div>
          <div className='forgot-pass'>Forgot Password?</div>
          <button type='submit'>Login</button>
          <p>Don't have an account? <a href='/register'>Sign Up</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login
