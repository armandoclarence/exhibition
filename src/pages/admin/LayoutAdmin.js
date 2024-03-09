import React, {useContext} from 'react';
import {NavLink,Navigate, Link, Outlet} from 'react-router-dom'
import Bending from '../../assets/img/Bending.svg'
import Approved from '../../assets/img/Approved.svg'
import '../../styles/admin/admin.css'
import { UserContext } from '../UserProvider';

function LayoutAdmin() {
  const { decrypted, removeJWT } = useContext(UserContext);
  if(decrypted == null) return <Navigate to='/' />
  if(decrypted.user_type_id === 2) return <Navigate to='/exhibitor' />
  else if(decrypted.user_type_id === 3) return <Navigate to='/stall/1' />
  console.log("Decrypted in LayoutAdmin");
  console.table(decrypted);
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
        <h1 className='text-lg font-bold'> Admin: {decrypted.sub}</h1>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <NavLink to='bending' className={`flex items-center space-x-2 text-gray-900`}>
                <img src={Bending} alt='bending' className={`w-6 h-6`} />
                <span>Bending Exhibitor</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='approved' className={`flex items-center space-x-2 text-gray-900`}
              >
                <img src={Approved} alt='approved' className={`w-6 h-6`} />
                <span>Approved Exhibitor</span>
              </NavLink>
            </li>
            <li>
              <Link to='/' onClick={removeJWT}>
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

export default LayoutAdmin