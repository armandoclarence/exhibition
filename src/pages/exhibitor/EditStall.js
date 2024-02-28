import React, { useState, useEffect } from 'react';
import FormStall from './FormStall';

function EditStall() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/stall/1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

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
        id: 2 // replace with the actual user id
      }
    };
    console.log('Updated data:', updatedData); // Log the data object
    fetch(`http://localhost:5000/stall/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
    // ...
  };
  return (
    <div>
      <FormStall handleSubmit={handleSubmit} handleChange={handleChange} stall={data} />
    </div>
  );
}

export default EditStall;
