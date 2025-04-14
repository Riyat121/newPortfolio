import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

import obeysVideo from './ObeysVideo.mp4';
import Ochiclone12 from './Ochiclone12.mp4';



const Projects = () => {



  useGSAP(()=>{
gsap.from("#video",{
  x: 300,
  opacity:0,
  duration: 5,
  delay:2,
})
  })

  return (
   <>
   <div id='Projects' className='h-full  flex  w-full'>
<div  className='-500 w-180 px-30 py-10' id='description '>
<h2 className='text-amber-50 underline font-medium text-3xl'>Obeys Agency Clone  </h2>
<p className='text-amber-50 leading-7 font-normal mt-3 italic text-2xl'>The Obeys Agency Clone is a visually dynamic and interactive web project built using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll. This project replicates the modern and sleek design of Obeys Agency, focusing on smooth animations, engaging scroll effects, and a seamless user experience.</p>
<a href="https://github.com/Riyat121/obysAgency" className='italic underline text-orange-400 '>Github link</a>
<div>
  <a href="https://riyat121.github.io/obysAgency/"className='italic underline text-orange-400'>Project link </a>
</div>

</div>

<div id='project' className='h-150 w-1/2 '>
<video id='video' className='h-[60%] size rounded-xl-140 mt-10 w-150 ml-40' autoPlay loop muted src={obeysVideo}></video>

</div>
    
    </div>
    <div id='Projects' className='h-full  flex  w-full'>
<div  className='-500 w-180 px-30 py-10' id='description '>
<h2 className='text-amber-50 underline font-medium text-3xl'>Ochi Design Clone   </h2>
<p className='text-amber-50 leading-7 font-normal mt-3 italic text-2xl'>Recreated the Ochi Design agency website using React with smooth animations and scroll effects. Integrated GSAP and Locomotive Scroll for seamless transitions and an interactive user experience. Focused on replicating the modern UI, responsive layout, and elegant motion design of the original site.</p>
<a href="https://github.com/Riyat121/Ochi" className='italic underline text-orange-400 '>Github link</a>
<div>
  <a href="https://riya-ochi.netlify.app/"className='italic underline text-orange-400'>Project link </a>
</div>

</div>

<div id='project' className='h-150 w-1/2 '>
<video id='video' className='h-[60%] size-140 rounded-xl mt-10 w-150 ml-40' autoPlay loop muted src={Ochiclone12}></video>

</div>
    
    </div>
    </>
  )
}

export default Projects

