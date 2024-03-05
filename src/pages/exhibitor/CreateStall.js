import React, {useState,useContext} from 'react'
import FormStall from './FormStall'
import {Exhibitor} from './LayoutExhibitor'

function CreateStall() {

  const stall = useContext(Exhibitor)
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

  const fetchCreateStall = async() => {
    const createStall = await fetch('http://localhost:5000/stall/add', {
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
    const response = await createStall.json()
    alert(response.responseMessage)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCreateStall()
  }
  return (
    <div>
      <FormStall handleChange={handleChange} handleSubmit={handleSubmit} stall={form} />
    </div>
  )
}

export default CreateStall