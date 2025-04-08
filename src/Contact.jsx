import React, { useState } from 'react'


    
const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validateForm = () => {
      let newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email format";
      if (!formData.message.trim()) newErrors.message = "Message is required";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form Submitted:", formData);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
    };
  return (
   <>
   <div  id='Contact'>
<div  className='h-100vh w-100vw px-20 py-15   '>
<h1 className='text-7xl italic  font-semibold  text-amber-50  underline mb-10 '>Let's get in touch </h1>
       
       <div className='h-full w-full flex  '>
       <div className="socials  text-2xl flex flex-col gap-10   font-medium text-amber-50 italic ">
                <a className='hover:text-gray-500' href="https://www.instagram.com/r_iya_tiwari/"> Instagram</a>
                <a className='hover:text-gray-500' href="https://www.linkedin.com/in/riya-tiwari-853570276/">Linkedin </a>
                <a className='hover:text-gray-500' href="https://x.com/Riya14968">twitter</a>
                <div className="contact py-20">
                <ul  className='text-amber-50 '>
                    <h2 className='text-[1.1rem] text-gray-400'>Or send me a mail to </h2>
                    <li> riyat5755@gmail.com</li>
                    <li></li>
                </ul >
            </div>
            </div>
           
            <div className="w-[70vh]  bg-gray-500 p-6 rounded-lg ml-150 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Send me an email </h2>
      <div className=''>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        {/* Name Field */}
        <div>
          <label className="block  font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 "
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
        </div>   
       

</div>
   </div>
   </>
  )
}

export default Contact
