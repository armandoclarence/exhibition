import React from 'react';

function FormStall({handleSubmit, handleChange, stall}) {
  return (
    <form onSubmit={handleSubmit} className='h-full border-blue-50 flex flex-col text-black space-y-2 w-full mx-auto p-20'>
      <label htmlFor="stallName">Stall Name</label>
      <input value={stall?.stallName ?? ""} type="text" id='stallName' name='stallName' placeholder='Stall Name' onChange={handleChange} required />
      <label htmlFor="stallDescription">Stall Description</label>
      <textarea value={stall?.stallDescription ?? ''} id='stallDescription' name="stallDescription" cols="30" rows="10" placeholder='Stall Description' onChange={handleChange} required />
      <label htmlFor="photoUrl">Photo URL</label>
      <input value={stall?.photoUrl ?? ''} type="text" id='photoUrl' name='photoUrl' placeholder='Photo URL' onChange={handleChange} required />
      <label htmlFor="videoUrl">Video URL</label>
      <input value={stall?.videoUrl ?? ''} type="text" id='videoUrl' name='videoUrl' placeholder='Video URL' onChange={handleChange} required />
      <label htmlFor="brochureUrl">Brochure URL</label>
      <input value={stall?.brochureUrl ?? ''} type="text" id='brochureUrl' name='brochureUrl' placeholder='Brochure URL' onChange={handleChange} required />
      <input type="submit" value="Submit" className='bg-green-500 mx-auto p-2 text-white' />
    </form>
  )
}


export default FormStall;