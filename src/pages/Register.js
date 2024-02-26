import React from 'react'
import '../styles/login.css'
import '../styles/register.css'
import passwordHide from '../assets/img/password-hide.png'

function Register() {
  return (
    <div className='loginPage'>
      <div className='wave'></div>
      <div className='sign-in'>
        <form id='signup' className='signForm'>
          <h1>Sign Up</h1>
          <div className='login-input'>
            <div className='username'>
              <input type='text' id='fname' placeholder='First Name' />
              <input type='text' id='lname' placeholder='Last Name' />
            </div>
            <input type='tel' id='mobile' placeholder='Mobile' />
            <input type='email' id='email' placeholder='Email' />
            <div className='pass'>
              <input id='password' type='password' placeholder='Password' />
              <img src={passwordHide} alt='invisible' />
            </div>
            <div className='type-acc'>
              <div className='exhibitor'>
                <input type='radio' name='typeAcc' id='exhibitor' />
                <label htmlFor='exhibitor'>Exhibitor</label>
              </div>
              <div className='user'>
                <input type='radio' name='typeAcc' id='user' />
                <label htmlFor='user'>User</label>
              </div>
            </div>
          </div>
          <button type='submit'>Sign Up</button>
          <p>Already have an account? <a href='/'>Login</a></p>
        </form>
      </div>
    </div>
  )
}

export default Register
