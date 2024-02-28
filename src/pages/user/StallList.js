import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStallById } from './service/stallService';

function StallList() {
  const [stall, setStall] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchStallById(id)
      .then(data => setStall(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  const videoId = new URLSearchParams(new URL(stall.videoUrl).search).get('v');

  return (
    <div className='border-2 border-blue-200 rounded-lg p-4 shadow-lg space-y-2'>
      <h2 className='text-2xl font-bold'>{stall.stallName}</h2>
      <p className='text-gray-700'>{stall.stallDescription}</p>
      <img className='w-full h-64 object-cover rounded' src={stall.photoUrl} alt={stall.stallName} />
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a className='text-blue-500 hover:underline' href={stall.brochureUrl}>View Brochure</a>
    </div>
  )
}

export default StallList;






// import React, { useState, useEffect } from 'react';
// import YouTube from 'react-youtube';
// import { useParams } from 'react-router-dom';
// import { fetchStallById } from './service/stallService';

// function StallList() {
//   const [stall, setStall] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetchStallById(id)
//       .then(data => setStall(data))
//       .catch(error => console.error('Error:', error));
//   }, [id]);


//   console.log(stall)
//   const videoId = 'https://www.youtube.com/watch?v=_eTcseS410E';
//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className='border-2 border-blue-200 rounded-lg p-4 shadow-lg space-y-2'>
//       <h2 className='text-2xl font-bold'>{stall.stallName}</h2>
//       <p className='text-gray-700'>{stall.stallDescription}</p>
//       <img className='w-full h-64 object-cover rounded' src={stall.photoUrl} alt={stall.stallName} />
//       <div className='aspect-w-16 aspect-h-9'>
//         <YouTube src={videoId} opts={opts} />
//       </div>
//       <a className='text-blue-500 hover:underline' href={stall.brochureUrl}>View Brochure</a>
//     </div>
//   )
// }

// export default StallList;