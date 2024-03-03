import {LiaEdit, LiaPenSolid} from 'react-icons/lia'
import {NavLink, Link, Outlet} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import useLocalStorage from '../../util/useLocalStorage';
import { createContext } from 'react';

export const Exhibitor = createContext('')
function LayoutExhibitor() {   
  const [token, setToken] = useLocalStorage('', 'jwt');
  const decrypted = jwtDecode(token);
  console.log("Decrypted in LayoutExhibitor" + decrypted);
  console.log(token)
  const removeJWT = () => {
    window.localStorage.removeItem('jwt')
  }
  console.log(token)
  return (
    <div className='flex flex-col h-full bg-gray-100'>
      <header className='flex items-center justify-between p-6 bg-white border-b border-gray-200'>
        <div>
        <h1 className='text-lg font-bold'>{decrypted.sub}</h1>
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
              <Link to='/' onClick={removeJWT}>
                Logout  
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Exhibitor.Provider value={decrypted}>
        <Outlet />
      </Exhibitor.Provider>
    </div>
  )
}

export default LayoutExhibitor
