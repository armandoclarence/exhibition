import React, {useState} from 'react'
import { LiaTelegram } from "react-icons/lia";  

function ChatBox() {
  const [message, setMessage] = useState('')
  return (
    <div className='absolute inset-0 text-white'>
      <div className="absolute grid flex-col justify-around h-full left-0 bottom-0 top-0 bg-blue-300">
        <h1 className='justify-self-start'>alex@gmail.com</h1>
        <div className="flex flex-col space-y-4 justify-center">
          <button className='bg-[#181616] p-2 hover:invert rounded-e-2xl transition'>hari@gmail.com</button>
          <button className='bg-[#181616] p-2 hover:invert rounded-e-2xl transition'>hari@gmail.com</button>
          <button className='bg-[#181616] p-2 hover:invert rounded-e-2xl transition'>hari@gmail.com</button>
          <button className='bg-[#181616] p-2 hover:invert rounded-e-2xl transition'>hari@gmail.com</button>
        </div>
      </div>
      <div className="absolute right-0 top-1/2">
        <div className="flex items-start gap-2.5">
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
          </div>
        </div>
      </div>
      <div className='absolute flex justify-between bottom-4 right-12 w-3/4 h-8 p-2'>
        <input type='text' onChange={(e)=> setMessage(e.target.value)} value={message} placeholder='Enter a Message' className="placeholder:text-zinc-700 rounded-xl border border-blue-500 h-8 outline-blue-900 w-full text-black p-2 bg-blue-300" />
        <LiaTelegram size={24} className='text-white' />
      </div>
    </div>
  )
}

export default ChatBox
