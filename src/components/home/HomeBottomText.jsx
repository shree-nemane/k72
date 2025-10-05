import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 my-4'>
        <Link className='text-[9vw] px-2 pt-1 leading-[10vw] lg:text-[6vw] lg:px-6 lg:pt-3 lg:leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full uppercase' to='/Projects'>Projects</Link>
        <Link className='text-[9vw] px-2 pt-1 leading-[10vw] lg:text-[6vw] lg:px-6 lg:pt-3 lg:leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full uppercase' to='/Agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText