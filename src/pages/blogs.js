import Header from '@/components/header/Header'
import Nav from '@/components/header/Nav'
import Bg from '@/components/layout/Bg'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

export default function Blogs() {
  const router = useRouter();
  
  const blogs = [
    {
      name: 'How to create a Docker Swarm of Appwrite containers and UI with Swarmpit',
      link: "https://dev.to/hackmamba/how-to-create-a-docker-swarm-of-appwrite-containers-and-ui-with-swarmpit-1nje",
    },
    {
      name: "Live Streaming With Mux And Nuxt.Js",
      link: "https://blog.openreplay.com/live-streaming-with-mux-and-nuxt-js/"
    },
    {
      name: "Distribute Mobile Apps Artifacts Via Telegram Using Codemagic",
      link: "https://blog.openreplay.com/distribute-mobile-apps-artifacts-via-telegram/"
    },
    {
      name: "Cross-platform development using Ionic+Capacitor",
      link: "https://blog.openreplay.com/cross-platform-development-with-ionic-capacitor"
    },
  ]
  return (<> 
    <Header />
    <main> 
      <Nav />
      <Bg> 
        <div className=''>
          <h2 className='text-white font-bold text-[4rem]'> Blogs </h2>
          <ul> 
           { blogs.map(b =>  <li className='px-3 py-3 mb-2 bg-white pr-7 hover:bg-slate-200'> 
              {'\u{1F3F9}'} <Link href={b.link} className='pl-3 underline underline-offset-4' target='blank'>{b.name} </Link></li>) }
          </ul>

          <div className='mt-5'> 
            <button onClick={() => router.back()} className="px-6 py-[0.55rem] font-semibold bg-white border-4 border-white border-solid appearance-none"> Go Back </button>
            <Link href={'/projects'} className="px-6 py-3 font-semibold text-white border-4 border-yellow-300 border-solid"> Projects {'\u{1F449}'} </Link>
          </div>
        </div>
      </Bg>
    </main>
  </>
  )
}
