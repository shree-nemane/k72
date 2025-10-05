import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import NavContext, { NavbarContext } from '../../context/NavContext';
import { useContext } from 'react';
import Clock from '../time/clock';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const FullScreenNav = () => {

    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)


    useEffect(() => {
        if (navOpen) {
            // prevent background scroll
            document.body.style.overflow = "hidden";
        } else {
            // restore scroll
            document.body.style.overflow = "";
        }

        // cleanup in case component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [navOpen]);


    function gsapAnimation() {
        const tl = gsap.timeline();
        tl.to('.fullscreennav', {
            display: 'block'
        })

        tl.to(".stairing", {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.2
            }
        });
        tl.to(".link", {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navLink', {
            opacity: 1
        }, '<')

        tl.to('.foot', {
            opacity: 1,
        }, '<')

    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline();

        tl.to(".link", {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })

        tl.to(".stairing", {
            height: 0,
            stagger: {
                amount: 0.15
            }
        });

        tl.to('.navLink', {
            opacity: 0
        }, "<")

        tl.to('.fullscreennav', {
            display: 'none',

        },)

        tl.to('.foot', {
            opacity: 0,
        }, '<')

    }

    useGSAP(() => {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen]);


    return (
        <div ref={fullScreenRef} id="fullscreennav" className='fullscreennav hidden text-white z-50 h-screen w-full overflow-hidden absolute '>
            <div className="h-screen w-full fixed ">
                <div className="h-full w-full flex gap-0">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>
            
            <div ref={fullNavLinkRef} className='relative'>
                <div className="navLink flex w-full justify-between lg:p-5 p-3 items-start">
                    <Link onClick={() => {
                        setNavOpen(false)
                    }}
                     to='/' className=''>
                        <div className='w-24 lg:w-24'>
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </Link>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='w-20 h-20  lg:h-24 lg:w-24 relative cursor-pointer group'>
                        <div className='w-0.5 lg:h-36 h-30 absolute -rotate-42 origin-top top-0% bg-white group-hover:bg-[#D3FD50] transition-colors'></div>
                        <div className='w-0.5 lg:h-36 h-30 absolute right-0 rotate-42 origin-top top-0% bg-white group-hover:bg-[#D3FD50] transition-colors'></div>
                    </div>
                </div>

                <div id='all-links' className='py-50 lg:py-0'>
                    <Link to='/Projects' onClick={() => {
                        setNavOpen(false)
                    }}>
                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-[16vw] lg:text-[8vw] text-center leading-[1.2] lg:leading-[0.8] lg:pt-4 uppercase'>Work</h1>
                            <div className='moveLink absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Agence' onClick={() => {
                        setNavOpen(false)
                    }}>
                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-[16vw] lg:text-[8vw] text-center leading-[1.2] lg:leading-[0.8] lg:pt-4 uppercase'>Agence</h1>
                            <div className='moveLink absolute flex top-0  text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Know us</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Know us</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                </div>
                                <div className='moveX flex items-center '>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Know us</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Know us</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/contact' onClick={() => {
                        setNavOpen(false)
                    }}>
                        <div className='link origin-top relative border-t-1 border-white'>
                            <h1 className='font-[font2] text-[16vw] lg:text-[8vw] text-center leading-[1.2] lg:leading-[0.8] lg:pt-4 uppercase'>Contact</h1>
                            <div className='moveLink absolute flex top-0 text-black gap-4 bg-[#D3FD50]'>
                                <div className='moveX flex items-center gap-4'>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Send fax</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Send fax</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                </div>
                                <div className='moveX flex items-center gap-4'>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Send fax</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>Send fax</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/blog' onClick={() => {
                        setNavOpen(false)
                    }}>
                        <div className='link origin-top relative border-y-1 border-white'>
                            <h1 className='font-[font2] text-[16vw] lg:text-[8vw] text-center leading-[1.2] lg:leading-[0.8] lg:pt-4 uppercase'>Blog</h1>
                            <div className='moveLink movex absolute flex top-0 text-black bg-[#D3FD50]'>
                                <div className='moveX flex items-center gap-4'>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                </div>
                                <div className='moveX flex items-center gap-4'>
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                                    <h2 className='whitespace-nowrap font-[font2] text-6xl lg:text-[8vw] text-center lg:leading-[0.8] pt-4 lg:pt-4 uppercase'>See Everything</h2>
                                    <img className='w-35 h-15 lg:w-50 lg:h-20 object-cover shrink-0 rounded-full' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={`foot relative flex justify-between items-end px-3 mt-20 ${!navOpen ? "hidden" : ""}`}>
                <div className='flex justify-center items-center gap-4'>
                    <Clock label="India_" timezone="Asia/Kolkata" />
                </div>

                <div className='flex gap-4 pl-24'>
                    <h3 className='uppercase font-[font2] text-xs hover:text-[#D3FD50] transition-colors duration-500'>Privacy Policy</h3>
                    <h3 className='uppercase font-[font2] text-xs hover:text-[#D3FD50] transition-colors duration-500'>Privacy Notice</h3>
                    <h3 className='uppercase font-[font2] text-xs hover:text-[#D3FD50] transition-colors duration-500'>Ethics Report</h3>
                    <h3 className='uppercase font-[font2] text-xs hover:text-[#D3FD50] transition-colors duration-500'>Consent Choice</h3>
                </div>
                
                <div className='flex justify-center items-center gap-2'>
                    <div className='font-[font2] text-4xl border-2 border-white rounded-full px-2 pt-1 leading-7 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-500'>FB</div>
                    <div className='font-[font2] text-4xl border-2 border-white rounded-full px-2 pt-1 leading-7 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-500'>IG</div>
                    <div className='font-[font2] text-4xl border-2 border-white rounded-full px-2 pt-1 leading-7 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-500'>IN</div>
                    <div className='font-[font2] text-4xl border-2 border-white rounded-full px-2 pt-1 leading-7 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-500'>BE</div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav