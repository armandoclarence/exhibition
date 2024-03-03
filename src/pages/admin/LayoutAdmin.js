import React, {useContext} from 'react';
import {NavLink, Link, Outlet} from 'react-router-dom'
import Bending from '../../assets/img/Bending.svg'
import Approved from '../../assets/img/Approved.svg'
import '../../styles/admin/admin.css'
import useLocalStorage from '../../util/useLocalStorage';
import { jwtDecode } from 'jwt-decode';
import { UserProvider } from '../UserContext';

function LayoutAdmin() {
  const [token, setToken] = useLocalStorage('', 'jwt');
  console.log(token)
  const decrypted = jwtDecode(token);
  console.log("Decrypted in LayoutExhibitor" + decrypted);
  // const { user } = useContext(UserProvider);
  const removeJWT = () => {
    window.localStorage.removeItem('jwt')
  }
  // console.log("lay admin",user);

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
        <h1 className='text-lg font-bold'> Admin: </h1>
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