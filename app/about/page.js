'use client'
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <section className="bg-gray-900">
            <div className='flex flex-row items-stretch justify-center w-full px-6 py-12 gap-4'>

                {/* CARD 1 */}
                <div className='w-1/3 bg-gray-800 p-5 border border-gray-700 h-64 rounded-l-lg flex flex-col'>
                    <h1 className='font-semibold text-lg text-gray-100 border-b border-gray-700 pb-1'>
                        Who am I ?
                    </h1>

                    <div className='flex flex-col gap-2 mt-3 mb-3'>
                        <h1 className='text-gray-300 font-medium text-sm'>
                            Software Developer
                        </h1>

                        <p className='text-xs text-gray-400 leading-relaxed'>
                            I'm a full-stack developer who loves crafting clean, scalable web applications.
                            My goal is to build solutions that offer both exceptional performance and a
                            delightful user experience that make life easier and more enjoyable.
                        </p>
                    </div>

                    <Link
                        href={'/resume/Solman-Sofi-Hussain.pdf'}
                        className='mt-auto w-full text-center bg-cyan-500 text-white font-semibold text-xs rounded-md py-2 hover:bg-cyan-600 transition'
                    >
                        Download CV
                    </Link>
                </div>

                {/* CARD 2 */}
                <div className='flex flex-col w-1/3 bg-gray-800 p-5 border border-gray-700 h-64'>
                    <h1 className='font-semibold text-lg text-gray-100 border-b border-gray-700 pb-1'>
                        Personal Info
                    </h1>

                    <div className='flex flex-col gap-2 mt-3 text-gray-400'>
                        <p><span className='text-gray-300 font-semibold text-xs'>Birthdate :</span> <span className='text-xs'>01/09/1998</span></p>
                        <p><span className='text-gray-300 font-semibold text-xs'>Email :</span> <span className='text-xs'>info.insightinnova@gmail.com</span></p>
                        <p><span className='text-gray-300 font-semibold text-xs'>Phone :</span> <span className='text-xs'>+91 96132-72831</span></p>
                        <p><span className='text-gray-300 font-semibold text-xs'>Employee :</span> <span className='text-xs'>Insight Innova</span></p>
                        <p><span className='text-gray-300 font-semibold text-xs'>Address :</span> <span className='text-xs'>Mankachar, Assam, India - 783131</span></p>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className='w-1/3 bg-gray-800 p-5 border border-gray-700 h-64 rounded-r-lg'>
                    <h1 className='font-semibold text-lg text-gray-100 border-b border-gray-700 pb-1'>
                        My Expertise
                    </h1>

                    <div className='flex flex-col gap-3 mt-3 text-gray-400'>
                        <div>
                            <h1 className='text-xs font-medium text-gray-300'>Web Development</h1>
                            <p className='text-xs'>Creating dynamic and responsive websites to enhance user experience.</p>
                        </div>

                        <div>
                            <h1 className='text-xs font-medium text-gray-300'>Full Stack Development</h1>
                            <p className='text-xs'>Delivering comprehensive solutions for both front-end and back-end operations efficiently.</p>
                        </div>

                        <div>
                            <h1 className='text-xs font-medium text-gray-300'>Mobile App Development</h1>
                            <p className='text-xs'>Building intuitive and user-friendly mobile applications that simplify daily tasks.</p>
                        </div>
                    </div>
                </div>

            </div>

            <hr className='border-gray-800' />
        </section>
    )
}

export default About