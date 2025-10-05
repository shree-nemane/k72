import React from 'react'

const ProjectCard = (props) => {
  return (
      <>
          <div className="w-full lg:w-1/2 h-full group relative transition-all rounded-none hover:rounded-[40px] overflow-hidden">
              <img className="w-full h-full object-cover" src={props.image1} alt="" />
              <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex justify-center items-center top-0 left-0 h-full w-full bg-black/50">
                  <h2 className="uppercase font-[font1] text-5xl text-white border-2 border-white rounded-full pt-2 px-4">View project</h2>
              </div>
          </div>

          <div className="w-full lg:w-1/2 h-full group relative transition-all rounded-none hover:rounded-[40px] overflow-hidden">
              <img className="w-full h-full object-cover" src={props.image2} alt="" />
              <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex justify-center items-center top-0 left-0 h-full w-full bg-black/50">
                  <h2 className="uppercase font-[font1] text-5xl text-white border-2 border-white rounded-full pt-2 px-4">View project</h2>
              </div>
          </div>
      </>           
  )
}

export default ProjectCard