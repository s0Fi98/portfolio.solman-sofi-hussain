'use client'
import React from 'react';

const Career = () => {
  return (
    <section className='bg-gray-900'>
      <div className='flex items-center justify-center px-6 py-12 w-full mx-auto'>
        <div className='grid grid-cols-2 gap-6 w-full max-w-5xl font-body'>

          {/* CARD 1 */}
          <div className="px-8 py-5 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="mb-3 text-lg font-bold text-gray-100">
              Insight Innova
            </p>

            <div className="flex items-center justify-between italic">
              <span className="text-sm font-semibold text-gray-400">
                Dec, 2023 - Present
              </span>
              <span className="text-sm font-semibold text-gray-300">
                Software Developer
              </span>
            </div>

            <div className="mt-3">
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                I founded my own software venture, gaining insights into the complexities of running a business,
                from development to client management. I tackled diverse projects, from enhancing existing websites
                to adding new functionalities, which significantly expanded my skills and knowledge. Despite the
                challenges of being a one-person team, this endeavor honed my ability to deliver quality work under
                pressure and deepened my understanding of the software industry.
              </p>

              <p className="text-cyan-400 hover:text-cyan-300 hover:underline mt-4 text-center cursor-pointer">
                Read more
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="px-8 py-5 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="mb-3 text-lg font-bold text-gray-100">
              Skaplink Technologies Pvt Ltd.
            </p>

            <div className="flex items-center justify-between italic">
              <span className="text-sm font-semibold text-gray-400">
                Oct, 2021 - Dec, 2023
              </span>
              <span className="text-sm font-semibold text-gray-300">
                Junior Software Developer
              </span>
            </div>

            <div className="mt-3">
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                Joining Skaplink Technologies Pvt Ltd as my first job was a transformative experience. As a Junior
                Software Developer, I quickly adapted to the professional environment and learned the intricacies
                of working within an organization. This role provided me with invaluable insights into real-time
                project development and collaboration. I gained hands-on experience, honed my coding skills, and
                developed a keen understanding of software solutions.
              </p>

              <p className="text-cyan-400 hover:text-cyan-300 hover:underline mt-4 text-center cursor-pointer">
                Read more
              </p>
            </div>
          </div>

        </div>
      </div>

      <hr className='border-gray-800' />
    </section>
  )
}

export default Career;