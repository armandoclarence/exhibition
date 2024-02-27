import React from 'react';

function StallList() {
  const stalls = [
    {
      stallName: 'Stall 1',
      stallDescription: 'This is stall 1',
      photoUrl: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/08/08/Pictures/_6bda0940-b9ad-11e9-98cb-e738ad509720.jpg',
      videoUrl: 'https://www.youtube.com/embed/watch?v=vGZAlhJomdo&t=612s',
      brochureUrl: 'http://example.com/brochure1.pdf'
    },
    
    // Add more stalls as needed
  ];

  return (
    <div className='min-w-full p-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {stalls.map((stall, index) => (
        <div key={index} className='border-2 border-blue-200 rounded-lg p-4 shadow-lg space-y-2'>
          <h2 className='text-2xl font-bold'>{stall.stallName}</h2>
          <p className='text-gray-700'>{stall.stallDescription}</p>
          <img className='w-full h-64 object-cover rounded' src={stall.photoUrl} alt={stall.stallName} />
          <div className='aspect-w-16 aspect-h-9'>
            <iframe className='aspect-content' src={stall.videoUrl} title={stall.stallName} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <a className='text-blue-500 hover:underline' href={stall.brochureUrl}>View Brochure</a>
        </div>
      ))}
    </div>
  )
}

export default StallList;