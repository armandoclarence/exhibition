import React from 'react'
import {useLocation} from 'react-router-dom'
import Button from './Button'

function Exhibitor({exhibitor}) {
  const location = useLocation()
  const {firstname, lastname, email, mobile, status} = exhibitor
  return (
    <>
      <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        {
          location.pathname === '/admin/bending' 
          ? (<Button />)
          : <td>{status}</td> 
        }
      </tr>
    </>
  )
}

export default Exhibitor
