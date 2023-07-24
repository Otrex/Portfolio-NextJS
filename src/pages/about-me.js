import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import Nav from "@/components/header/Nav";
import { Inter } from "@next/font/google";

import me from "../assets/img/me.png";

const inter = Inter({ subsets: ["latin"] });

export default function AboutMe() {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <div className="fixed top-0 -z-20 -right-[10%] opacity-40 w-full h-[100vh]">
          <div className="w-1/2">&nbsp;</div>
          <div className="w-1/2">
            <Image src={me} alt="about me" className="h-full" />
          </div>
        </div>
        <div className="w-full h-[100vh] flex items-center justify-center bg-[rgba(16,16,16, 1)]">
          <div className="max-w-[70%] h-[50%] bg-white ">
            <h1 className="md:text-[4rem] text-[2rem] text-white font-bold transform md:-translate-y-[4.3rem] translate-y-[-2.1rem] md:-translate-x-[0.1rem]">
              {" "}
              About Me ✌🏼
            </h1>
            <div className="h-[80%] overflow-scroll pt-[2.5rem] md:pt-[1rem] transform translate-x-[-1.6rem]">
              <div className="md:p-[3rem] p-[1.5rem] md:text-[1.4rem] overflow-scroll transform -translate-y-[4.3rem]">
                <p className="mb-3 ">
                Great to meet you! <br/> As a full stack developer with over 3 years of experience, 
                I started my journey designing web pages with Dreamweaver and eventually progressed 
                to building both frontend and backend apps using a variety of tools.<br/> 
                Throughout this period, I had the opportunity to work with several startups, 
                contributing to the development of complex applications such as DUMO LMS, LandPay, 
                Flitaa, Xtellar app, UseMarshal, Tidier, and many others.<br/><br/>
                During my leisure time, I enjoy exploring the latest tools and software development technologies, 
                including DevOps tools such as Docker and the latest JavaScript/Python trends. 
                My proficiency in JavaScript stands out, as it has been the primary programming language 
                I have professionally worked with. <br/>
                Additionally, I am also skilled in PHP and Python.
                </p>
              </div>
            </div>
              <div className="text-right transform translate-y-[-0.9rem] md:text-[1.5rem] md:mr-[0.13rem]">
                <button className="px-[3rem] py-[.5rem] w-full md:w-auto bg-black text-white mt-4 outline outline-2 outline-white">
                  <Link href={"/skills"}>Checkout My Skills! {"🔥"}</Link>
                </button>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
