import React from 'react'
import Slider from './Slider'

const ContactContent = (props) => {
    return (
        <div className='flex flex-col gap-10 h-full w-screen text-white'>
            {/* Text, address, place */}
            <div className='flex flex-col lg:flex justify-center text-center h-full w-screen gap-10'>
                <div className='hidden lg:flex lg:justify-center lg:text-center'>
                    <div className='flex items-end '>Onscreen or in an office. <br />Here. There. <br />Anywhere.</div>
                    <div id='textContent' className=' uppercase font-[font1] text-[10vw] w-[900px] leading-[9vw]'>{props.text}</div>
                    <div className=' flex items-end w-1/8'>525 Av. Viger O - Suite 400 Montréal, QC H2Z 1G6 →</div>
                </div>
                <div className='lg:hidden flex flex-col gap-8 mt-18 text-center items-center'>
                    <div id='textContent' className=' uppercase font-[font1] text-[12vw] w-[200px] leading-[11vw]'>{props.text}</div>
                    <div className='flex items-end font-[font2]'>Onscreen or in an office. <br />Here. There. <br />Anywhere.</div>
                    <div className=' flex items-end w-50 font-[font2]'>525 Av. Viger O - Suite 400 Montréal, QC H2Z 1G6 →</div>
                </div>
            </div>

            {/* infinite linear moving text */}
            <Slider />

            {/* Social box */}

            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='text-lg font-[font1]'>Follow us</div>
                <div className='flex gap-2 lg:gap-4'>
                    <h1 className='uppercase text-4xl lg:text-7xl font-[font2] border-2 border-white px-4 lg:px-6 lg:leading-[4vw] pt-1 lg:pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>FB</h1>
                    <h1 className='uppercase text-4xl lg:text-7xl font-[font2] border-2 border-white px-4 lg:px-6 lg:leading-[4vw] pt-1 lg:pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>IG</h1>
                    <h1 className='uppercase text-4xl lg:text-7xl font-[font2] border-2 border-white px-4 lg:px-6 lg:leading-[4vw] pt-1 lg:pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>IN</h1>
                    <h1 className='uppercase text-4xl lg:text-7xl font-[font2] border-2 border-white px-4 lg:px-6 lg:leading-[4vw] pt-1 lg:pt-2 rounded-full transition-all hover:border-[#D3FD50] hover:text-[#D3FD50]'>BE</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactContent