import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {

  useGSAP(function(){
    gsap.from('.stair',{
      height:0,
      stagger:{
        amount:-0.3
      }
    })
  })

  return (
    <div className= "text-white">

      <div className='h-screen w-full flex fixed z-20 top-0'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App 