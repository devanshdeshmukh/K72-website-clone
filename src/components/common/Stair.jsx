
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

const Stair = () => {
      const stairParentRef = useRef(null)

  useGSAP(function () {

    const tl = gsap.timeline()

    tl.to(stairParentRef.current, {
      display: 'block'
    })
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25
      }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })
    tl.to(stairParentRef.current, {
      display: 'none'
    })
    tl.to('.stair', {
      y:'0%',
    })  
  })
    return (
    <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex'>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
            <div className='stair h-full w-1/5 bg-black'></div>
        </div>
    </div>
    )
}

export default Stair