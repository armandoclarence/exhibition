import React, {useEffect, useContext} from 'react'
import {Outlet, Link, useNavigate, useLocation} from 'react-router-dom'
import {UserContext} from '../UserProvider'
function LayoutUser() {
  const {decrypted, removeJWT} = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=> {
    if(decrypted == null) navigate('/')
    if(location.pathname === '/stall') navigate('/stall/1')
  }, [location, navigate, decrypted])
  console.log("Decrypted in LayoutUser");
  console.table(decrypted)
  return (
    <div className='flex flex-col bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
          <h1 className='text-lg font-bold'>User {decrypted.sub}</h1>
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
