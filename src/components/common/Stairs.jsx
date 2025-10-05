import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
    
    
    const StairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.to(StairParentRef.current, {
            display: "block"
        })
        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.2
            }
        });
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.25
            }
        });
        tl.to(StairParentRef.current, {
            display: "none"
        })
        tl.to(".stair", {
            y: 0
        })

        gsap.from(pageRef.current,{
            opacity: 0,
            delay: 1.2,
            scale: 1.2
        })
    }, [currentPath]);

  return (
    <div>
        <div ref={StairParentRef} className="h-screen w-full fixed top-0 z-10">
          <div className="h-full w-full fixed top-0 z-10 flex">
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
              <div className="stair h-full w-1/5 bg-black"></div>
          </div>
        </div>

        <div ref={pageRef}>
            {props.children}
        </div>
    </div>
      
  )
}

export default Stairs