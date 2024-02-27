import React from 'react'
import {LiaEdit, LiaCheckSquare } from 'react-icons/lia'
import {NavLink, Outlet} from 'react-router-dom'

function LayoutExhibitor() {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
          <h1 className='text-lg font-bold'>Admin1.</h1>
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
              <NavLink to='editStall' className={`flex items-center space-x-2 text-gray-900`}
              >
                <LiaCheckSquare className='w-6 h-6' />
                <span>Edit Stall</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default LayoutExhibitor
