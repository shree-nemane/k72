import React from 'react'
import Clock from '../time/Clock'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='h-[190vw] lg:h-[28vw] w-screen bg-black px-6 py-4'>
            <div className='text-white flex flex-col justify-between h-full '>
                {/* upper section of footer */}
                <div className='flex justify-between'>
                    <div className='flex gap-2 lg:gap-4'>
                        <h1 className='uppercase text-3xl lg:text-7xl font-[font2] border-2 border-white px-2 lg:px-6 leading-5 lg:leading-[4vw] pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</h1>
                        <h1 className='uppercase text-3xl lg:text-7xl font-[font2] border-2 border-white px-2 lg:px-6 leading-5 lg:leading-[4vw] pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>IG</h1>
                        <h1 className='uppercase text-3xl lg:text-7xl font-[font2] border-2 border-white px-2 lg:px-6 leading-5 lg:leading-[4vw] pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>IN</h1>
                        <h1 className='uppercase text-3xl lg:text-7xl font-[font2] border-2 border-white px-2 lg:px-6 leading-5 lg:leading-[4vw] pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>BE</h1>
                    </div>
                    <Link to="/contact">
                        <div className='flex items-center gap-2 border-2 px-2 lg:px-6 border-white hover:border-[#D3FD50] rounded-full group transition-all duration-500'>
                            <h1 className='uppercase text-3xl lg:text-7xl font-[font2] leading-4 lg:leading-[4vw] pt-2 transition-all group-hover:text-[#D3FD50]'>Contact</h1>
                            <svg className='group-hover:text-[#D3FD50]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="white" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                    </Link>

                </div>
                {/* bottom section of footer */}
                <div className='flex justify-between items-center'>
                    <Clock label="India_" timezone="Asia/Kolkata" />
                    <div className='flex gap-4'>
                        <h3 className='uppercase font-[font2] text-sm hover:text-[#D3FD50] transition-colors duration-500'>Privacy Policy</h3>
                        <h3 className='uppercase font-[font2] text-sm hover:text-[#D3FD50] transition-colors duration-500'>Privacy Notice</h3>
                        <h3 className='uppercase font-[font2] text-sm hover:text-[#D3FD50] transition-colors duration-500'>Ethics Report</h3>
                        <h3 className='uppercase font-[font2] text-sm hover:text-[#D3FD50] transition-colors duration-500'>Consent Choice</h3>
                    </div>
                    <div className='uppercase font-[font2] text-sm hover:text-[#D3FD50] transition-colors'>Back To Top</div>
                </div>
            </div>
        </div>
    )
}

export default Footer