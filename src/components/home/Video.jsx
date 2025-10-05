import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full bg-amber-50'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="/bg-video.mp4"></video>
    </div>
  )
}

export default Video