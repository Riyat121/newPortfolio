import React from 'react'
import Navbar from './Navbar'
import {motion } from 'motion/react'

import emojiPic from './emojipic.jpg';
const Homepage = () => {
  const text = "I am a passionate developer and coder.";
const letters = text.split("");
  return (
   <>
    <div id='About' className='overflow-x-hidden '>
    <Navbar />
    <div className='h-full flex  w-full py-30 px-30'>
<div className='h-full  w-50% px-40 py-40  '>
<h3 

className=' text-amber-50 mb-0.5 text-3xl font-bold '>Hello! I am </h3>
<motion.h1    initial={{ x: -100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{ duration: 1.8 }}   className='text-orange-400 font-extrabold text-5xl uppercase  '>riya tiwari</motion.h1>
<motion.h2  className='text-gray-600 text-2xl'  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ staggerChildren: 0.1 }}
>
  {letters.map((letter, index) => (
    <motion.span 
      key={index} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: index * 0.1  }}
    >
      {letter}
    </motion.span>
  ))} </motion.h2>
</div>
<div className='h-full w-50%   '>
  <img src={emojiPic}
   alt=""
   className='rounded-full h-120 transition-transform duration-500 ease-in-out hover:scale-110' />
</div>
    </div>
    
      </div>
   </>
  )
}

export default Homepage
