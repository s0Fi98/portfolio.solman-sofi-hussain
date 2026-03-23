'use client'
import Image from "next/image";
import React from "react";
import About from './about/page'
import Career from './career/page'
import Products from './products/page'
import Contact from './contact/page'

export default function Home() {
  return (
    <section className="flex flex-col w-full">

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center px-10 font-body bg-gray-900">

        {/* Background Image */}
        <Image
          src="/image/backgroundImg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-30"
        />

        {/* Dark Overlay (important) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="text-5xl font-semibold text-gray-300">
            Hi, I'm Solman Sofi Hussain
          </h1>

          <h2 className="text-3xl text-gray-300">
            I'm a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Full Stack Developer
            </span>
          </h2>
        </div>

      </div>

      {/* OTHER SECTIONS */}
      <About />
      <Career />
      <Products />
      <Contact />

    </section>
  );
}