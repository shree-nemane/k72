import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const IntroTeam = () => {
  const team = [
    { fullName: "Carl Godbout", position: "Business Lead", src: "/team/Carl_480x640-480x640.jpg" },
    { fullName: "Olivier Duclos", position: "Graphic Designer", src: "/team/Olivier_480x640-480x640.jpg" },
    { fullName: "Lawrence Meunier", position: "Account Coordinator", src: "/team/Lawrence_480x640-480x640.jpg" },
    { fullName: "Hugo Joseph", position: "Associate Creative Director", src: "/team/HugoJoseph_480x640-480x640.jpg" },
    { fullName: "Chantal Gobeil", position: "Creative Director", src: "/team/ChantalG_480x640-480x640.jpg" },
    { fullName: "Sophie Auger", position: "Account Executive", src: "/team/SophieA_480x640-480x640.jpg" },
    { fullName: "Claire Robert", position: "Account Manager", src: "/team/Claire_480x640-480x640.jpg" },
    { fullName: "Michèle Riendeau", position: "Director of Strategy", src: "/team/Michele_480X640-480x640.jpg" },
    { fullName: "Mélanie Laviolette", position: "Art Director", src: "/team/MEL_480X640-480x640.jpg" },
    { fullName: "Meggie Lavoie", position: "Account Director", src: "/team/MEGGIE_480X640_2-480x640.jpg" },
    { fullName: "Joël Letarte", position: "Associate Creative Director", src: "/team/joel_480X640_3-480x640.jpg" }
  ];

  gsap.registerPlugin(ScrollTrigger);

  const profileimgDivRef = useRef(null);
  const imgparentRef = useRef(null);

  // Track which team member is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(function () {
    gsap.to(imgparentRef.current, {
      scrollTrigger: {
        trigger: profileimgDivRef.current,
        start: 'top 10%',
        end: 'top -50%',
        markers: false,
        pin: true,
        pinSpacing: true,
        pinReparent: false,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })
  });

  return (
    <div>
      <div ref={imgparentRef} className='relative my-70'>
        {/* Image div */}
        <div ref={profileimgDivRef} className='absolute z-10 w-86 h-106 top-15 left-70'>
          {hoveredIndex !== null && (
            <img
              className='w-full h-auto rounded-3xl object-cover'
              src={team[hoveredIndex].src}
              alt={team[hoveredIndex].fullName}
            />
          )}
        </div>

        {/* Team name list */}
        <div className='flex flex-col'>
          {team.map((member, idx) => (
            <div
              key={member.fullName}
              className="relative overflow-hidden font-[font2] pt-3 px-2 border-y border-white group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* background overlay */}
              <div className="absolute inset-0 bg-[#D3FD50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-350"></div>
              {/* content */}
              <div className="relative flex justify-between px-3">
                <div className="transition-colors duration-300 group-hover:text-black">
                  {member.position}
                </div>
                <div className="text-5xl uppercase transition-colors duration-300 group-hover:text-black">
                  {member.fullName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroTeam