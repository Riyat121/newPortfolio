import React from 'react'

import pieVideo from './pie3.mp4';

const Skills = () => {
  return (
   <>
   <div id='Skills' className='h-full w-full  '>
<div className=' flex flex-wrap py-25   space-x-10 animate-slide gap-28 justify-center'>
    <img className='h-52.5  ' src="https://imgs.search.brave.com/gL--m98-fUa7QIC9EYmcsrjHuqh6aXqjui4ny8ZNUw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/ZGlhLWxvZ29zLTYv/NTEyLzEyMS1jc3Mz/LTUxMi5wbmc" alt="" />
    <img className='h-52.5  ' src="https://imgs.search.brave.com/RYyTBSujGcPv02Sx5pgXMzKoNiMKKIK1-sBkBXB1Vf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc1LzkyLzIz/LzM2MF9GXzc1OTIy/MzMyX1Y4amlKOUky/RjlkOUhxVjdSdFB6/VUF4cjVzN1lIV09k/LmpwZw" alt="" />
    <img className='h-52.5  ' src="https://imgs.search.brave.com/yGQ_OXSDFOsqnYOBvUotu334aLYXRqmDl20E9F2H8lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWF0ZXJpYWwtdGFp/bHdpbmQuY29tL3N2/Zy9yZWFjdC5zdmc" alt="" />
    <img className='h-52.5  ' src="https://imgs.search.brave.com/YuHnmOnJ3SoEqL-H7BTyMnOoRpQi0MWDbk4VfWX5cmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL21h/bnVlbGJpZWgvbG9n/by1maWxlLWljb25z/L21hc3Rlci9pY29u/cy9qYXZhLnN2Zw" alt="" />
</div>
<div className=' flex py-20 ml-28  px-25 items-center' id='pie-chart'>
 <div className='w-68 mr-45'>
    <h2 className='text-4xl ml-20 font-semibold text-red-600'>Coder</h2>
    <p className='text-amber-50 italic  font-medium text-2xl mt-3.5'>Proficient in Java, with a strong command of Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP), crafting efficient and scalable solutions.</p>
 </div>
 <video className='filter h-70 invert brightness-200 contrast-200' loop muted autoPlay src={pieVideo}></video>
 <div className='w-68 ml-25'>
    <h2 className='text-4xl font-semibold  text-orange-400'>Developer</h2>
    <p className='text-amber-50 italic w-90 font-medium text-2xl mt-3.5'>Experienced Frontend Developer skilled in crafting visually appealing, high-performance web applications using React, Tailwind CSS, and modern JavaScript frameworks, ensuring seamless user experiences and optimized performance.</p>
 </div>
</div>
   </div>
   </>
  )
}

export default Skills
