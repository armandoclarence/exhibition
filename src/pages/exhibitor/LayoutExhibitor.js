import React from 'react'
import {LiaEdit, LiaPenSolid} from 'react-icons/lia'
import {NavLink, Link, Outlet} from 'react-router-dom'

function LayoutExhibitor() {
  return (
    <div className='flex flex-col h-full bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
          <h1 className='text-lg font-bold'>Exhibitor.</h1>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <NavLink to='createStall' className={`flex items-center space-x-2 text-gray-900`}>
                <LiaEdit className='w-6 h-6' />
                <span>Create Stall</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='editStall' className={`flex items-center space-x-2 text-gray-900`}>
                <LiaPenSolid className='w-6 h-6' />
                <span>Edit Stall</span>
              </NavLink>
            </li>
            <li>
              <Link to='/'>
                Logout  
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default LayoutExhibitor
