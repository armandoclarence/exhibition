import React, { useState } from 'react';

function FormStall() {
  const [form, setForm] = useState({
    stallName: '',
    stallDescription: '',
    photoUrl: '',
    videoUrl: '',
    brochureUrl: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/stall/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form,
        user: {
          id: 352 // This is the id of the user associated with the stall
        }
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }

  return (
    <form onSubmit={handleSubmit} className='border-blue-50 flex flex-col text-black space-y-2 w-full mx-auto p-20'>
      <label htmlFor="stallName">Stall Name</label>
      <input type="text" id='stallName' name='stallName' placeholder='Stall Name' onChange={handleChange} />
      <label htmlFor="stallDescription">Stall Description</label>
      <textarea id='stallDescription' name="stallDescription" cols="30" rows="10" placeholder='Stall Description' onChange={handleChange} />
      <label htmlFor="photoUrl">Photo URL</label>
      <input type="text" id='photoUrl' name='photoUrl' placeholder='Photo URL' onChange={handleChange} />
      <label htmlFor="videoUrl">Video URL</label>
      <input type="text" id='videoUrl' name='videoUrl' placeholder='Video URL' onChange={handleChange} />
      <label htmlFor="brochureUrl">Brochure URL</label>
      <input type="text" id='brochureUrl' name='brochureUrl' placeholder='Brochure URL' onChange={handleChange} />
      <input type="submit" value="Submit" className='bg-green-500 mx-auto p-2 text-white' />
    </form>
  )
}

export default FormStall;