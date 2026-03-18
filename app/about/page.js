import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <section className="bg-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
            <div className='flex flex-row items-center justify-center w-full px-6 py-12'>
                <div className='w-1/3 bg-white/80 p-5 border border-r border-gray-400 h-64 rounded-l-lg'>
                    <h1 className='font-semibold text-lg text-gray-700 underline'>Who am I ?</h1>
                    <div className='flex flex-col gap-2 mt-3 mb-3'>
                        <h1><span className='text-gray-700 font-medium text-sm'>Software Developer</span></h1>
                        <p className='text-xs'>I'm a full-stack developer who loves crafting clean, scalable web applications. As a software
                            developer, My goal is to build solutions that offer both exceptional performance and a delightful user experience that make life easier and more enjoyable.</p>
                    </div>
                    <Link href={'/resume/Solman-Sofi-Hussain.pdf'}
                          className='mt-auto w-full grid border text-center bg-cyan-600 text-white font-semibold text-xs rounded-md p-2 hover:bg-gray-600 hover:text-white'>Download
                        CV</Link>
                </div>
                <div className='flex flex-col w-1/3 bg-white/80 p-5 border border-r border-gray-400 h-64'>
                    <h1 className='font-semibold text-lg text-gray-700 underline'>Personal Info</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        <h1><span className='text-xs font-semibold'>Birthdate : </span><span
                            className='text-xs'>01/09/1998</span></h1>
                        <h1><span className='text-xs font-semibold'>Email : </span><span
                            className='text-xs'>info.insightinnova@gmail.com</span></h1>
                        <h1><span className='text-xs font-semibold'>Phone : </span><span className='text-xs'>+ (91) 96132-72831</span>
                        </h1>
                        <h1><span className='text-xs font-semibold'>Employee :</span><span
                            className='text-xs'>Turing.com</span></h1>
                        <h1><span className='text-xs font-semibold'>Address : </span><span className='text-xs'>Mankachar, Assam, India -783131</span>
                        </h1>
                    </div>
                </div>
                <div className='w-1/3 bg-white/80 p-5 border border-r border-gray-400 h-64 rounded-r-lg'>
                    <h1 className='font-semibold text-lg text-gray-700 underline'>My Expertise</h1>
                    <div className='flex flex-col gap-2 mt-3'>
            <span className='flex flex-col gap-1'>
              <h1 className='text-xs font-medium'>Web Development</h1>
              <p className='text-xs'>Creating dynamic and responsive websites to enhance user experience.</p>
            </span>
                        <span className='flex flex-col gap-1'>
              <h1 className='text-xs font-medium'>Full Stack Development</h1>
              <p className='text-xs'>Delivering comprehensive solutions for both front-end and back-end operations efficiently.</p>
            </span>
                        <span className='flex flex-col gap-1'>
              <h1 className='text-xs font-medium'>Mobile App Development</h1>
              <p className='text-xs'>Building intuitive and user-friendly mobile applications that simplify daily tasks.</p>
            </span>
                    </div>
                </div>
            </div>
            <hr className='border border-white'/>
        </section>
    )
}

export default About
