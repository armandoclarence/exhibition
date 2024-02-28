import React, {useEffect} from 'react'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'

function LayoutUser() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=> {
    if(location.pathname === '/stall') navigate('/stall/1')
  }, [location, navigate])
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
          <h1 className='text-lg font-bold'>User.</h1>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default LayoutUser
