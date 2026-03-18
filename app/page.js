import React from "react";

import About from './about/page'
import Career from './career/page'
import Products from './products/page'
import Contact from './contact/page'

export default function Home() {
  return (
    <React.Fragment>
      <section className='flex flex-col w-full'>
        <div className="min-h-screen bg-gray-800 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 relative font-body">
          <img src={"image/backgroundImg.jpg"} alt="" className='w-full h-full object-cover opacity-25 absolute top-0 left-0' />
          <div className='relative flex flex-col items-start justify-center h-full ml-3 gap-4'>
            <h1 className='text-5xl font-medium text-white z-10'>Hi, I'm Solman Sofi Hussain</h1>
            <h1 className='text-3xl font-medium text-white z-10'>I'm a <span
                className="bg-clip-text text-transparent bg-text-gradient">Full Stack Developer</span></h1>
          </div>
          <hr className='border border-white z-10 relative' />
        </div>
        <About />
        <Career />
        <Products />
        <Contact />
      </section>
    </React.Fragment>
  );
}
