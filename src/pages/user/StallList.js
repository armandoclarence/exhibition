import React, { useState, useEffect } from 'react';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchStallById } from './service/stallService';

function StallList() {
  const [stall, setStall] = useState({});
  const [videoId, setVideoId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if(id === '0') navigate('../1')
    fetchStallById(id)
      .then(data => {
        setStall(data);
        const videoId = new URLSearchParams(new URL(data.videoUrl).search).get('v') || '';
        setVideoId(videoId);
      })
      .catch(error => {
        navigate('../1')
        console.error('Error:', error)
      });
  }, [id, navigate]);

  const nextId = parseInt(id) + 1;
  const prevId = parseInt(id) - 1;

  return (
    <div className='mt-6 relative border-2 w-3/4 mx-auto border-blue-200 rounded-lg p-16 box-border shadow-lg space-y-2'>
      <h2 className='text-2xl font-bold'>{stall?.stallName}</h2>
      <p className='text-gray-700'>{stall?.stallDescription}</p>
      <img style={{height:'250px'}} className='h-1/2 rounded-2xl' src={stall?.photoUrl} alt={stall?.stallName} />
      {
        videoId != null ?
        <iframe
          width='100%'
          height='315'
          className='aspect-video'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        : <p>{stall.videoUrl}</p>
      }
      <div className="flex justify-between">
        <button className='text-blue-500 bg-zinc-900 rounded-xl p-2 *:hover:underline cursor-pointer'>
          <a href={stall?.brochureUrl}>View Brochure</a>
        </button>
        <button className='text-blue-500 bg-zinc-900 rounded-xl p-2 *:hover:underline cursor-pointer'>
          <a href={stall?.brochureUrl}>Contact Us</a>
        </button>
      </div>
      <div className='flex absolute left-0 right-0 bottom-1/2 !my-auto items-center justify-between'>
        <Link to={`../${prevId}`}>
          <LiaAngleLeftSolid size={40} className='cursor-pointer hover:text-gray-500 transition duration-300' />
        </Link>
        <Link to={`../${nextId}`}>
          <LiaAngleRightSolid size={40} className='cursor-pointer hover:text-gray-500 transition duration-300' />
        </Link>
      </div>
    </div>
  )
}

export default StallList;