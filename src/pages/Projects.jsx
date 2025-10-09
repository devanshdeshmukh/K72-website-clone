import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {

    const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  return (
    <div>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[13vw] uppercase'>Projets</h2>
      </div>
      <div className='-mt-18'>
        {projects.map(function(elem){
          return <div className='w-full h-[500px] mb-2 flex gap-2'>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
//3:18:36