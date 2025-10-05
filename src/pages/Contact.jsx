import React from 'react'
import Slider from '../components/contact/Slider'
import ContactContent from '../components/contact/ContactContent'


const Contact = () => {

  const contactText = [
    'To talk about you project',
    'To talk about your brand',
    'To talk about natural wine',
    'To talk results',
    'To talk about nothing in particular',
    'To talk for the sake of talking'
  ]

  return (

    // main div to contain all
    <div className='h-full w-screen flex flex-col items-center bg-black p-6' >
      
      {contactText.map((elem, idx) => (
        <div key={idx} className='lg:mb-30'>
          <ContactContent text={elem} />
        </div>
      ))}

    </div >

  )
}

export default Contact