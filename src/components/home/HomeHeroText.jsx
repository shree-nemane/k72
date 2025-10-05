import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] flex flex-col justify-end lg:justify-start h-screen w-screen '>
      <div className='pt-6 text-center'>
        <div className='text-5xl lg:text-[9.5vw] flex justify-center items-center uppercase lg:leading-[8vw]'>The spark for</div>
        <div className='text-5xl lg:text-[9.5vw] flex justify-center items-start uppercase lg:leading-[8vw]'>all <div className='h-[10vw] w-[20vw] lg:h-[7vw] lg:w-[16vw]  rounded-full overflow-hidden'> <Video /> </div> things</div>
        <div className='text-5xl lg:text-[9.5vw] flex justify-center items-center uppercase lg:leading-[8vw]'>creative</div>
      </div>

      <div className='flex justify-end items-center p-2 my-5 lg:my-0'>
        <div className='lg:w-[24vw] w-[65vw] text-[3vw] lg:text-base'>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
        </div>
      </div>
    </div>

  )
}

export default HomeHeroText