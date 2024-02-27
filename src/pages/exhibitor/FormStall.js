import React from 'react'

function FormStall() {
  return (
    <form className='bg-black flex flex-col text-white space-y-2 w-full mx-auto p-20'>
      <label htmlFor="name">Stall Name</label>
      <input type="text" id='name' name='name' placeholder='Stall Name' />
      <label htmlFor="desc">Stall Description</label>
      <textarea id='desc' name="desc" cols="30" rows="10" placeholder='Stall Description' />
      <label htmlFor="photoUrl">Photo URL</label>
      <input type="text" id='photoUrl' name='photoUrl' placeholder='Photo URL' />
      <label htmlFor="videoUrl">Video URL</label>
      <input type="text" id='videoUrl' name='videoUrl' placeholder='Video URL' />
      <label htmlFor="brochureUrl">Brouchure URL</label>
      <input type="text" id='brochureUrl' name='brochureUrl' placeholder='Brochure URL' />
      <input type="button" value="Submit" className='bg-green-500 mx-auto p-2 text-white' />
    </form>
  )
}

export default FormStall
