import React from 'react';

const Career = () => {
  return (
    <section className='bg-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900'>
      <div className='flex items-center justify-center px-6 py-12 w-full mx-auto'>
        <div className='grid grid-cols-2 gap-6 w-full max-w-5xl font-body'>
          <div className="px-8 py-4 bg-white/80 rounded-lg shadow-md dark:bg-gray-800">
            <p className="mb-3 text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Insight Innova</p>
            <div className="flex items-center justify-between italic">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-400">Dec, 2023 - Present</span>
              <span className="text-sm font-semibold text-gray-700">Software Developer</span>
            </div>
            <div className="mt-3">
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">I founded my own software venture, gaining insights into the complexities of running a business, from development to client management. I tackled diverse projects, from enhancing existing websites to adding new functionalities, which significantly expanded my skills and knowledge. Despite the challenges of being a one-person team, this endeavor honed my ability to deliver quality work under pressure and deepened my understanding of the software industry.</p>
              <p className="text-blue-600 dark:text-blue-400 hover:underline mt-4 text-center" role="link">Read more</p>
            </div>
          </div>
          <div className="px-8 py-4 bg-white/80 rounded-lg shadow-md dark:bg-gray-800">
            <p className="mb-3 text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Skaplink Technologies Pvt Ltd.</p>
            <div className="flex items-center justify-between italic">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-400">Oct, 2021 - Dec, 2023</span>
              <span className="text-sm font-semibold text-gray-700">Junior Software Developer</span>
            </div>
            <div className="mt-3">
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">Joining Skaplink Technologies Pvt Ltd as my first job was a transformative experience. As a Junior Software Developer, I quickly adapted to the professional environment and learned the intricacies of working within an organization. This role provided me with invaluable insights into real-time project development and collaboration. I gained hands-on experience, honed my coding skills, and developed a keen understanding of software solutions. This journey laid a strong foundation for my career and ignited my passion for technology.</p>
              <p className="text-blue-600 dark:text-blue-400 hover:underline mt-4 text-center" role="link">Read more</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='border border-white' />
    </section>
  )
}

export default Career;
