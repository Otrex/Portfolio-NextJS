import React from 'react'
import me from "../../assets/img/me.png";
import Image from "next/image";

export default function Bg({ children }) {
  return (
    <div>
      <div className="fixed top-0 -z-20 -left-[10%] opacity-40 w-full h-[100vh]">
          <div className="w-1/2">
            <Image src={me} alt="about me" className="h-full" />
          </div>
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-[rgba(16,16,16, 1)]"> 
        {children}
      </div>
    </div>
  )
}
