import React from 'react'
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full px-[5%] mt-4">
      <div className="flex justify-between">
        <div className="text-white">
          <Link href="/">OTREX</Link>
        </div>
        <div className="text-white">
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}
