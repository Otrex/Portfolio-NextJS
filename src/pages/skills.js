
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";

import me from "../assets/img/me.png";
import Header from "@/components/header/Header";
import Nav from "@/components/header/Nav";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Skills() {
  const router = useRouter();
  const skills = [
    {
      type: 'Programming Languages',
      items: [
        "JavaScript (TypeScript)",
        "Python",
        "PHP"
      ]
    },
    {
      type: 'Frameworks',
      items: [
        "Express.js",
        "Vue.js",
        "Nuxt.js",
        "Laravel (PHP)",
        "React",
        "SCSS",
        "Tailwind CSS",
        "Ionic - Capacitor"
      ]
    },
    {
      type: 'Communication',
      items: [
        "Technical Writing",
        "Software Documentation Writing"
      ]
    },
    {
      type: 'DevOps/Cloud',
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Nginx",
        "Gitlab CI"
      ]
    },
    {
      type: 'Monitoring/ Database',
      items: [
        "MySQL ",
        "MongoDB",
        "Mixpanel",
      ]
    },
  ]

  return (
    <>
      <Header />
      <main>
        <Nav />
        <div className="fixed top-0 -z-20 -left-[10%] opacity-40 w-full h-[100vh]">
          <div className="w-1/2">
            <Image src={me} alt="about me" className="h-full" />
          </div>
        </div>
        <div className="w-full h-[100vh] flex items-center justify-center bg-[rgba(16,16,16, 1)]">
          <div>
            <h1 className="text-[4rem] text-white font-bold transform -translate-y-[4.3rem] -translate-x-[0.1rem]">
              {" "}
              Skills
            </h1>
            <div className="grid grid-cols-3 gap-4">
              { skills.map((s, idx) => (
                <div className="skill-card">
                  <h2 className="list-count">{`0${idx + 1}`}</h2>
                  <div className="p-5">
                    <h3 className="pl-3 text-xl font-bold border-l-8 border-black border-solid ">
                      {s.type}
                    </h3>

                    <ul className="mt-4 pl-7"> 
                      {s.items.map(i => (
                        <li className="list-disc "> {i} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-center"> 
                <div> 
                <button onClick={() => router.back()} className="px-6 py-[0.55rem] font-semibold bg-white border-4 border-white border-solid appearance-none"> Go Back </button>
                  <Link href={'/projects'} className="px-6 py-3 font-semibold text-white border-4 border-yellow-300 border-solid"> Projects {'\u{1F449}'} </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
