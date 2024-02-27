import React from 'react'
import {useLocation} from 'react-router-dom'
import ApproveButton from './ApproveButton'

function Exhibitor({exhibitor}) {
  const location = useLocation()
  const {id, firstname, lastname, email, mobile, status} = exhibitor
  return (
    <>
      <tr >
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        { 
          location.pathname === '/admin/bending' 
          ? (<ApproveButton email={email} userId={id} />)
          : <td>{status}</td> 
        }
      </tr>
    </>
  )
}

export default Exhibitor
