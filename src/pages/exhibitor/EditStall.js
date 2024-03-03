import React, { useState, useEffect, useContext } from 'react';
import FormStall from './FormStall';
import {Exhibitor} from './LayoutExhibitor'

function EditStall() {
  const stall = useContext(Exhibitor)
  const [data, setData] = useState({})
  console.log(stall)
  useEffect(() => {
    const fetchStall = async() => {
      try {
        const response = await fetch(`http://localhost:5000/stall/user/${stall.userId}`)
        const data = await response.json();
        setData(data)
      }catch (error) {
        console.error('Error:', error);
      }
    }
    fetchStall()
  }, [stall.userId]);

  const handleChange = (e) => {
    setData((prevData) =>{
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...data,
      user: {
        id: stall.userId // replace with the actual user id
      }
    };
    console.log('Updated data:', updatedData); // Log the data object
    fetch(`http://localhost:5000/stall/${updatedData.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Here you can handle the response. For example, you can set the state with the updated data
      setData(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      // If there's a conflict, inform the user
      if (error.message.includes('409')) {
        alert('Conflict occurred. Please try again.');
      }
    });
  };
  return (
    <>
      <FormStall handleSubmit={handleSubmit} handleChange={handleChange} stall={data} />
    </>
  );
}

export default EditStall;
