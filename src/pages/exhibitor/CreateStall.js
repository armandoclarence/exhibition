import React, {useState,useContext} from 'react'
import FormStall from './FormStall'
import {Exhibitor} from './LayoutExhibitor'

function CreateStall() {

const stall = useContext(Exhibitor)
const [dataMessage, setDataMessage] = useState('')
  const [form, setForm] = useState({
    stallName: '',
    stallDescription: '',
    photoUrl: '',
    videoUrl: '',
    brochureUrl: ''
  });
  
  const handleChange = (e) => {
    setForm((prevForm)=>{
      return {
        ...prevForm,
        [e.target.name]: e.target.value
      }
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
          id: stall.userId  // This is the id of the user associated with the stall
        }
      })
    })
    .then(response => response.json())
    .then(data => setDataMessage(data.responseMessage))
    .catch(error => console.error('Error:', error));
    window.alert(`${dataMessage}`)
  }
  return (
    <div>
      <FormStall handleChange={handleChange} handleSubmit={handleSubmit} stall={form} />
    </div>
  )
}

export default CreateStall