import React from 'react'

const Navbar = () => {
  return (  
   <>
    <div id='Navbar' className='h-12 fixed z-1000  w-full bg-zinc-900 '>
      <div className='   w-full text-1xl font-serif items-end overflow-hidden ml-110 font-semibold justify-items-end flex gap-20 py-3 px-100'>
       {/* {["About","Skills","Project","Contact Me"].map((item,index) =>(
        <a key={index} className='text-amber-50 hover:text-orange-400'>{item}</a>
       ))} */}
       <a href="#About" className='text-amber-50 hover:text-orange-400'>About</a>
       <a href="#Skills" className='text-amber-50 hover:text-orange-400'>Skills</a>
       <a href="#Projects" className='text-amber-50 hover:text-orange-400'>Project</a>
       <a href="#Contact " className='text-amber-50 hover:text-orange-400'>Contact Us</a>
       
      </div>
      </div>
      
   </>
  )
}

export default Navbar
