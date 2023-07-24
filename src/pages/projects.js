import Header from '@/components/header/Header'
import Nav from '@/components/header/Nav'
import Bg from '@/components/layout/Bg'
import React from 'react'
import Link from "next/link";

import xtellar from "../assets/img/xtellar.png"
import marshal from "../assets/img/marshal.png"
import express from "../assets/img/express.png"
import paxity from "../assets/img/paxity.png"

import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      name: "Xtellar App",
      image: xtellar,
      link: "https://xtellar.app/",
      description: "This is an e-commerce application, I worked on at Xtellar"
    },
    {
      name: "Marshal App",
      image: marshal,
      link: "https://app.usemarshal.com",
      description: "This is full fledge online business software that provides security and ADA compliance features for your business website"
    },
    {
      name: "@Obisiket1/express-utils",
      image: express,
      link: "https://www.npmjs.com/package/@obisiket1/express-utils",
      description: "This is a typescript package that provides tools and decorators that can be used to setup a backend project with express.js"
    },
    {
      name: "Paxity",
      link: "https://beta.paxity.org/",
      image: paxity,
      description: "This is a Talent recruitment project that connects Talents to their desired Jobs"
    }
  ]
  return (<> 
    <Header />
    <main> 
      <Nav />
      <Bg> 
      <div className='h-[80vh] overflow-y-hidden'>
        <div className='h-full overflow-y-auto py-[5rem] '> 
        <h1 className="text-[4rem] text-white font-bold transform -translate-y-[4.3rem] -translate-x-[0.1rem]">
          {" "}
          Projects
        </h1>
        <div className="grid grid-cols-3 gap-4">
          { projects.map((s, idx) => (
            <Link href={s.link} className="project-card">
              <h2 className="list-count">{`0${idx + 1}`}</h2>
              <div className="p-5">
                <h3 className="pl-3 text-xl font-bold border-l-8 border-black border-solid ">
                  {s.name}
                </h3>
              </div>
              <Image src={s.image} alt='xtellar' />
              <div className='p-5'> 
                {s.description}
              </div>
            </Link>
          ))}

          <div className="flex items-center justify-center"> 
            <div> 
              <Link href={'/about-me'} className="px-6 py-3 font-semibold bg-white border-4 border-white border-solid"> Go Back </Link>
              <Link href={'/skills'} className="px-6 py-3 font-semibold text-white border-4 border-yellow-300 border-solid"> Skills {'\u{1F449}'} </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      </Bg>
    </main>
  </>
  )
}
