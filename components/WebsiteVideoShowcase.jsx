import React from 'react'

export default function WebsiteVideoShowcase() {
  return (
  <div className='min-h-screen flex items-center bg-gradient-to-tr from-red-900 via-black to-red-800 justify-center p-8'>
    <div className=' rounded-xl  overflow-hidden  max-w-4xl w-full '>
      <video autoPlay className='w-full h-auto' src='\assets\videos\Quality.mp4'>

      </video>

    </div>

  </div>
  )
}
