import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className=' pt-[45vh]'>
          <h2 className='font-[font2] text-[13vw] uppercase'>Projets</h2>
      </div>
      <div className='-mt-18'>
        <div className='w-full h-[500px] mb-4 flex gap-4'>
          <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
          <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
          <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='uppercase text-6xl font-[font1] border-4 pt-2 px-6 text-white border-white rounded-full'>vior le projet</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
//3:18:36