import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Products = () => {
    return (
        <section className='bg-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 w-full'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='grid grid-cols-3 gap-3 px-6 py-12 w-full font-body'>
                    <div className="flex flex-col bg-white/80 rounded-lg shadow-md dark:bg-gray-800">
                        <Image className="object-cover w-full h-64 rounded-t-lg" src={"/image/School.png"}
                             alt="Article" width={50} height={10}/>
                        <div className="p-6 flex flex-col">
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">School Management Website</span>
                            <Link href="#"
                                  className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-600 hover:underline">ST
                                FRANCIS DE SALES H S SCHOOL BAHALPUR</Link>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Developing a website with admin
                                panels for teachers and administrators. It features an online question paper creation
                                tool, simplifying the process for teachers by allowing them to set papers on their
                                phones, eliminating manual writing and design tasks.</p>
                            <Link href=''
                                  className="mt-6 mx-1 font-semibold text-xs text-center hover:underline text-gray-600 dark:text-gray-300">LEARN
                                MORE</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white/80 rounded-lg shadow-md dark:bg-gray-800">
                        <Image className="object-cover w-full h-64 rounded-t-lg" src={"/image/EduMed.png"}
                             alt="Article" width={100} height={100}/>
                        <div className="p-6 flex flex-col">
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">MEDICAL CONSULTANCY</span>
                            <Link href="#"
                                  className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-600 hover:underline">EDUMED ABROAD SERVICES</Link>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Developing a website with admin
                                panels for teachers and administrators. It features an online question paper creation
                                tool, simplifying the process for teachers by allowing them to set papers on their
                                phones, eliminating manual writing and design tasks.</p>
                            <Link href=''
                                  className="mt-6 mx-1 font-semibold text-xs text-center hover:underline text-gray-600 dark:text-gray-300">LEARN
                                MORE</Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white/80 rounded-lg shadow-md dark:bg-gray-800">
                        <img className="object-cover w-full h-64 rounded-t-lg" src={"./image/School.png"}
                             alt="Article"/>
                        <div className="p-6 flex flex-col">
                            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">School Management Website</span>
                            <Link href="#"
                                  className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-600 hover:underline">ST
                                FRANCIS DE SALES H S SCHOOL BAHALPUR</Link>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Developing a website with admin
                                panels for teachers and administrators. It features an online question paper creation
                                tool, simplifying the process for teachers by allowing them to set papers on their
                                phones, eliminating manual writing and design tasks.</p>
                            <Link href=''
                                  className="mt-6 mx-1 font-semibold text-xs text-center hover:underline text-gray-600 dark:text-gray-300">LEARN
                                MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border border-white'/>
        </section>
    );
};

export default Products;
