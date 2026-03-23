'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Products = () => {
    return (
        <section className="bg-gray-900 w-full">

            <div className="flex items-center justify-center px-6 py-12 max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-body">

                    {/* CARD 1 */}
                    <div className="group flex flex-col bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/10 transition duration-300">

                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src="/image/School.png"
                                alt="School Project"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-fill group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <span className="text-xs font-medium text-cyan-400 uppercase">
                                School Management
                            </span>

                            <Link href="#" className="mt-2 text-lg font-semibold text-gray-100 hover:text-cyan-400 transition">
                                ST FRANCIS DE SALES H S SCHOOL
                            </Link>

                            <p className="mt-2 text-sm text-gray-400 flex-grow leading-relaxed">
                                Admin panels for teachers and staff with an online question paper
                                creation system to eliminate manual work.
                            </p>

                            <Link href="#" className="mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
                                LEARN MORE →
                            </Link>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="group flex flex-col bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/10 transition duration-300">

                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src="/image/EduMed.png"
                                alt="EduMed"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-fill group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <span className="text-xs font-medium text-cyan-400 uppercase">
                                Medical Consultancy
                            </span>

                            <Link href="#" className="mt-2 text-lg font-semibold text-gray-100 hover:text-cyan-400 transition">
                                EDUMED ABROAD SERVICES
                            </Link>

                            <p className="mt-2 text-sm text-gray-400 flex-grow leading-relaxed">
                                Consultancy platform with structured admin flow and user
                                management for overseas education services.
                            </p>

                            <Link href="#" className="mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
                                LEARN MORE →
                            </Link>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="group flex flex-col bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/10 transition duration-300">

                        <div className="relative w-full h-56 overflow-hidden">
                            <Image
                                src="/image/School.png"
                                alt="School Project"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-fill group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <span className="text-xs font-medium text-cyan-400 uppercase">
                                School Management
                            </span>

                            <Link href="#" className="mt-2 text-lg font-semibold text-gray-100 hover:text-cyan-400 transition">
                                ST FRANCIS DE SALES H S SCHOOL
                            </Link>

                            <p className="mt-2 text-sm text-gray-400 flex-grow leading-relaxed">
                                Full-featured school system with automation tools and admin dashboards.
                            </p>

                            <Link href="#" className="mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
                                LEARN MORE →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <hr className="border-gray-800 mt-10" />
        </section>
    );
};

export default Products;