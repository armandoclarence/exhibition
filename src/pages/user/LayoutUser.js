import React, {useEffect} from 'react'
import {Outlet, Link, useNavigate, useLocation} from 'react-router-dom'
import useLocalStorage from '../../util/useLocalStorage';
import { jwtDecode } from 'jwt-decode'; 
function LayoutUser() {
  const [token, setToken] = useLocalStorage('', 'jwt');
  const decrypted = token ? jwtDecode(token): null;
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=> {
    if(decrypted == null) navigate('/')
    if(location.pathname === '/stall') navigate('/stall/1')
  }, [location, navigate, token, decrypted])
  console.log("Decrypted in LayoutUser" + decrypted);
  const removeJWT = () => {
  // console.log()
    window.localStorage.removeItem('jwt')
  }
  return (
    <div className='flex flex-col bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
          <h1 className='text-lg font-bold'>User.</h1>
        </div>
        <Link to='/' onClick={removeJWT}>
          Logout
        </Link>
      </header>
      <Outlet />
    </div>
  )
}

export default LayoutUser
