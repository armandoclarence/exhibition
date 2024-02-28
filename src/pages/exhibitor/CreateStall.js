import React, {useState} from 'react'
import FormStall from './FormStall'

function CreateStall() {
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
          id: 2// This is the id of the user associated with the stall
        }
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  return (
    <div>
      <FormStall handleChange={handleChange} handleSubmit={handleSubmit}  />
    </div>
  )
}

export default CreateStall
