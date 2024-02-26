import React from 'react'
import {NavLink} from 'react-router-dom'
import Bending from '../../assets/img/Bending.svg'
import Approved from '../../assets/img/Approved.svg'

function Header() {
  return (
    <>
      <header>
        <div className='header'>
          <h1>Admin1.</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='bending'>
                <img src={Bending} alt='bending' />
                <span>Bending Exhibitor</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='approved'>
                <img src={Approved} alt='approved' />
                <span>Approved Exhibitor</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
