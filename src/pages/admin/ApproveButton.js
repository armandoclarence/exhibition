import React from 'react';

function ApproveButton({ email, userId }) {
  const adminUserId = 1;

  function handleClick (e) {
    if(window.confirm('are you sure approve this exhibitor?') === true) {
      e.target.parentNode.parentNode.remove()
      console.log('handleClick called');
      console.log('email:', email);
      console.log('userId:', userId);
      console.log('adminUserId:', adminUserId);
    
      fetch('http://localhost:5000/user/authorize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailId: email,
          userId: userId,
          admin_user_id: adminUserId
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('fetch response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      }); 
    }
  }

  return (
    <td>
      <button onClick={handleClick} className='hover:bg-green-300 p-2 rounded-lg hover:text-black bg-green-700 text-white'>Approve</button>
    </td>
  )
}

export default ApproveButton;
