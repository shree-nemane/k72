import React from "react"
import ProjectCard from "../components/projects/ProjectCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useContext } from 'react';
import Footer from "../components/footer/Footer"
import { NavbarContext } from "../context/NavContext"

const Projects = () => {

  const [navOpen, setNavOpen] = useContext(NavbarContext)

  const project = [{
    image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".hero", {
      height: '40px',
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: ".lol",
        markers: false,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
      }
    })
  })

  return (
    <div className="project-div" >
      <div className="pt-[50vw] lg:pt-[16vw] px-2 lg:px-4">
        <h2 className="font-[font2] lg:text-[12vw] text-7xl uppercase">Work</h2>
      </div>
      
      <div className="lol -lg:mt-6 lg:p-4 p-2">
        {project.map(function (elem, idx) {
          return <div key={idx} className="hero w-full h-[300px] lg:h-[400px] flex flex-col lg:flex-row mb-2 gap-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>

      <Footer />
      
    </div>

  )
}

export default Projects