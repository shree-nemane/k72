import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React, { useRef } from "react"
import Footer from "../components/footer/Footer"
import ProfileSection from "../components/agence/ProfileSection"

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imgDivRef = useRef(null)
  const imgRef = useRef(null)

  const imageArray = [
    "/team/Carl_480x640-480x640.jpg",
    "/team/Olivier_480x640-480x640.jpg",
    "/team/Lawrence_480x640-480x640.jpg",
    "/team/HugoJoseph_480x640-480x640.jpg",
    "/team/ChantalG_480x640-480x640.jpg",
    "/team/MyleneS_480x640-480x640.jpg",
    "/team/SophieA_480x640-480x640.jpg",
    "/team/Claire_480x640-480x640.jpg",
    "/team/Michele_480X640-480x640.jpg",
    "/team/MEL_480X640-480x640.jpg",
    "/team/CAMILLE_480X640_2-480x640.jpg",
    "/team/MAXIME_480X640_2-480x640.jpg",
    "/team/MEGGIE_480X640_2-480x640.jpg",
    "/team/joel_480X640_3-480x640.jpg"
  ]

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: 'top 35%',
        end: 'top -140%',
        markers: false,
        pin: true,
        pinSpacing: true,
        pinReparent: false,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: false,
        onUpdate: (elem) => {

          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }

          imgRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full h-full">
        <div className="section1 py-1 ">
          <div ref={imgDivRef} className="absolute overflow-hidden h-[30vw] w-[20vw] lg:h-[20vw] lg:w-[15vw] rounded-xl lg:rounded-4xl -top-90 lg:top-60 left-[30vw] lg:left-[30vw] bg-red-500">
            <img ref={imgRef} className="w-full h-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
          </div>
          <div className="relative font-[font2]">
            <div className="mt-[20vh] lg:mt-[28vw]">
              <h1 className="text-[20vw] text-center uppercase leading-[17vw]">SEVEN7Y <br /> TWO</h1>
            </div>
            <div className="lg:pl-[40%] p-2 mt-20">
              <p className="text-xl leading-tight lg:leading-[4vw] lg:text-5xl">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
            </div>
          </div>

          {/* expertise of agency page */}
          <div className="flex justify-between items-center font-[font2] px-60 my-40">
            <div className="text-xl self-start">Expertise</div>
            <div className="font-[font2] text-xl">
              <h3>Strategy</h3>
              <h3>Advertising</h3>
              <h3>Branding</h3>
              <h3>Design</h3>
              <h3>Content</h3>
            </div>
            <div></div>
          </div>

          {/* Paragraph of agency pages */}
          <div className="flex justify-between items-start text-xl gap-10 px-20 font-[font2]">
            <p className="w-1/2">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
            <p className="w-1/2">Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
            <p className="w-1/2">Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
          </div>
        </div>

        <div className="section2 h-full w-full my-[12vw]">
          
        <ProfileSection />
        
        
          {/* <div className="my-40 bg-amber-900">

            <div className="flex flex-col w-full h-full relative justify-center items-center font-[font2] bg-amber-600">

              <div className="moveX absolute flex gap-400 bg-green-700 w-full top-20">
                <div id="name" className="uppercase flex justify-end text-9xl text-[#D3FD50]">Carl</div>
                <div id="name" className="uppercase flex justify-end text-9xl text-[#D3FD50]">Carl</div>

              </div>
              
              <div id="profile-img" className="relative h-screen">
                <img className="h-full rounded-4xl" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
              </div>

              <div className="moveX2 absolute flex gap-200 w-full bottom-20 bg-rose-700">
                <div id="position" className="flex justify-start gap-10">
                  <h2 className="uppercase text-[#D3FD50] text-9xl">Godbout</h2>
                  <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">Business Lead</h3>
                </div>
                <div id="position" className="flex justify-start gap-10 ">
                  <h2 className="uppercase text-[#D3FD50] text-9xl">Godbout</h2>
                  <h3 className="uppercase whitespace-nowrap text-white text-3xl self-end">Business Lead</h3>
                </div>
              </div>

            </div>

          </div> */}

        </div>
      </div>

      {/* <Footer className='' /> */}

    </div>
  )
}

export default Agence