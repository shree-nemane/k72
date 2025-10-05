import React, { useRef } from 'react'
import { useContext } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'

const DefaultNavbar = () => {

    const navGreen1Ref = useRef(null)
    const navGreen2Ref = useRef(null)
    const navGreen3Ref = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    return (
        <div className='flex z-5 justify-between items-start fixed top-0 w-full'>
            <Link to='/' className='p-2'>
                <div className='w-24 lg:w-24'>
                    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill={navColor} fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </Link>

            {/* Menus of 3 parts */}
            <div className='flex'>
                {/* Work menu */}
                <Link id='work'
                    to='/Projects'
                    onMouseEnter={() => {
                        navGreen3Ref.current.style.height = "100%"
                    }}
                    onMouseLeave={() => {
                        navGreen3Ref.current.style.height = "0%"
                    }}
                    className='hidden lg:block lg:relative lg:bg-black lg:w-72 lg:h-14 group'>
                    <div ref={navGreen3Ref} className='bg-[#D3FD50] transition-all duration-300 w-full h-0 top-0 absolute'></div>
                    <div className='relative h-full px-3 py-0.5 flex flex-col justify-end items-start gap-1.5'>
                        <div className='uppercase text-xl font-[font2] text-white group-hover:text-black transition'>Work</div>
                    </div>
                </Link>

                {/* Work menus */}
                <Link id='agency'
                    to='/Agence'
                    onMouseEnter={() => {
                        navGreen2Ref.current.style.height = "100%"
                    }}
                    onMouseLeave={() => {
                        navGreen2Ref.current.style.height = "0%"
                    }}
                    className='hidden lg:block lg:relative lg:bg-black lg:w-[26vw] lg:h-22 group'>
                    <div ref={navGreen2Ref} className='bg-[#D3FD50] transition-all duration-300 w-full h-0 top-0 absolute'></div>
                    <div className='relative h-full px-3 py-1 flex flex-col justify-end items-start gap-1.5'>
                        <div className='uppercase text-xl font-[font2] text-white group-hover:text-black transition'>Agency</div>
                    </div>
                </Link>

                {/* Main menu */}
                <div id='main-menu' onClick={() => setNavOpen(true)}
                    onMouseEnter={() => {
                        navGreen1Ref.current.style.height = "100%"
                    }}
                    onMouseLeave={() => {
                        navGreen1Ref.current.style.height = "0%"
                    }}
                    className='relative bg-black w-48 h-12 lg:w-56 lg:h-30 group'>

                    <div ref={navGreen1Ref} className='bg-[#D3FD50] transition-all duration-300 w-full h-0 top-0 absolute'></div>
                    <div className='relative h-full flex flex-col justify-between'>
                        {/* Hamburger Icon */}
                        <div className='pt-4 lg:pt-5 px-6 lg:px-4 flex flex-col justify-start items-end gap-1.5'>
                            <div className="w-12 h-0.5 bg-white group-hover:bg-black transition"></div>
                            <div className="w-6 h-0.5 bg-white group-hover:bg-black transition"></div>
                        </div>

                        {/* Menu Text (always stays inside parent) */}
                        <div className='hidden lg:block lg:text-xl lg:px-3 lg:py-1 lg:text-white lg:uppercase lg:font-[font2] lg:self-start lg:group-hover:text-black lg:transition'>Menu</div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DefaultNavbar