import React, { useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../footer/Footer';
import IntroTeam from './IntroTeam';

const BlackThemeContent = ({ theme }) => {

  const topTextOpacity = theme === "black" ? 1 : 0;
  const bottomTextOpacity = theme === "black" ? 1 : 0;

  const teamProfileArray = [
    {
      firstName: "Carl",
      lastName: "Godbout",
      position: "Business Lead",
      src: "/team/Carl_480x640-480x640.jpg"
    },
    {
      firstName: "Olivier",
      lastName: "Duclos",
      position: "Graphic Designer",
      src: "/team/Olivier_480x640-480x640.jpg"
    },
    {
      firstName: "Lawrence",
      lastName: "Meunier",
      position: "Account Coordinator",
      src: "/team/Lawrence_480x640-480x640.jpg"
    },
    {
      firstName: "Hugo",
      lastName: "Joseph",
      position: "Associate Creative Director",
      src: "/team/HugoJoseph_480x640-480x640.jpg"
    },
    {
      firstName: "Chantal",
      lastName: "Gobeil",
      position: "Creative Director",
      src: "/team/ChantalG_480x640-480x640.jpg"
    },
    {
      firstName: "Sophie",
      lastName: "Auger",
      position: "Account Executive",
      src: "/team/SophieA_480x640-480x640.jpg"
    },
    {
      firstName: "Claire",
      lastName: "Robert",
      position: "Account Manager",
      src: "/team/Claire_480x640-480x640.jpg"
    },
    {
      firstName: "Michèle",
      lastName: "Riendeau",
      position: "Director of Strategy",
      src: "/team/Michele_480X640-480x640.jpg"
    },
    {
      firstName: "Mélanie",
      lastName: "Laviolette",
      position: "Art Director",
      src: "/team/MEL_480X640-480x640.jpg"
    },
    {
      firstName: "Meggie",
      lastName: "Lavoie",
      position: "Account Director",
      src: "/team/MEGGIE_480X640_2-480x640.jpg"
    },
    {
      firstName: "Joël",
      lastName: "Letarte",
      position: "Associate Creative Director",
      src: "/team/joel_480X640_3-480x640.jpg"
    }
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % teamProfileArray.length;
  const nextProfile = teamProfileArray[nextIndex];
  const currentProfile = teamProfileArray[currentIndex];

  useEffect(() => {
    // Change profile every 2 hours (7200000 ms)
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % teamProfileArray.length);
    }, 7200000);

    return () => clearInterval(interval);
  }, [teamProfileArray.length]);





  return (
    <div className='w-screen h-full'>

      {/* Member profile display 1 */}
      <div className="flex flex-col w-full h-full relative justify-center items-center font-[font2]">

        {/* Top Text */}
        <div style={{ opacity: topTextOpacity }}
          className="moveX absolute text-[#D3FD50] flex gap-300 w-full top-20 transition-opacity duration-700"
        >
          <div className="uppercase flex justify-end text-9xl">{currentProfile.firstName}</div>
          <div className="uppercase flex justify-end text-9xl">{currentProfile.firstName}</div>
        </div>

        {/* Profile Image */}
        <div className="relative h-screen">
          <img
            className="h-full rounded-4xl"
            src={currentProfile.src}
            alt={currentProfile.firstName}
          />
        </div>

        {/* Bottom Text */}
        <div style={{ opacity: bottomTextOpacity }}
          className="moveX2 absolute flex gap-200 w-full bottom-20 transition-opacity duration-700"
        >
          <div className="flex justify-start gap-10">
            <h2 className="uppercase text-[#D3FD50] text-9xl">{currentProfile.lastName}</h2>
            <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">
              {currentProfile.position}
            </h3>
          </div>
          <div className="flex justify-start gap-10">
            <h2 className="uppercase text-[#D3FD50] text-9xl">{currentProfile.lastName}</h2>
            <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">
              {currentProfile.position}
            </h3>
          </div>
        </div>
      </div>

      {/* Member profile display 2 */}
      <div className="flex flex-col w-full h-full relative justify-center items-center font-[font2]">

        {/* Top Text */}
        <div
          className="moveX absolute text-[#D3FD50] flex gap-300 w-full top-20 transition-opacity duration-700"
        >
          <div className="uppercase flex justify-end text-9xl">{nextProfile.firstName}</div>
          <div className="uppercase flex justify-end text-9xl">{nextProfile.firstName}</div>
        </div>

        {/* Profile Image */}
        <div className="relative h-screen">
          <img
            className="h-full rounded-4xl"
            src={nextProfile.src}
            alt={nextProfile.firstName}
          />
        </div>

        {/* Bottom Text */}
        <div
          className="moveX2 absolute flex gap-200 w-full bottom-20 transition-opacity duration-700"
        >
          <div className="flex justify-start gap-10">
            <h2 className="uppercase text-[#D3FD50] text-9xl">{nextProfile.lastName}</h2>
            <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">
              {nextProfile.position}
            </h3>
          </div>
          <div className="flex justify-start gap-10">
            <h2 className="uppercase text-[#D3FD50] text-9xl">{nextProfile.lastName}</h2>
            <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">
              {nextProfile.position}
            </h3>
          </div>
        </div>
      </div>

      {/* Entire team intro */}
      <IntroTeam />

      {/* Work display */}
      <div className='h-screen w-screen flex justify-center rounded-t-4xl overflow-hidden'>
        <img className='w-full h-full object-cover' src="/projects/CF.jpg" alt="" />
      </div>

      <div className='h-screen w-screen flex justify-center rounded-t-4xl overflow-hidden'>
        <img className='w-full h-full object-cover' src="/projects/OPTO.jpg" alt="" />
      </div>

      <div className='h-screen w-screen flex justify-center rounded-t-4xl overflow-hidden'>
        <img className='w-full h-full object-cover' src="/projects/OSM.jpg" alt="" />
      </div>




    </div>
  )
}

export default BlackThemeContent