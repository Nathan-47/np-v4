"use client";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbFileCv } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="grid grid-cols-1 gap-8 my-20">
          <h1 className="font-bold text-xl">
            A Brummie that is passionate about building and creating digital
            magic using code.
          </h1>

          <p className="mt-6 leading-8 text-gray-300">
            Currently a Web Developer @{" "}
            <a
              className="bg-yellow-400 text-gray-800 font-bold p-1 rounded-sm hover:bg-yellow-600 "
              href="https://www.bcusu.com/"
              target="_blank"
            >
              BCUSU
            </a>
          </p>

          {/* about section */}
          <p className="mb-8">
            Hi ✋🏾 I'm a Web Developer currently working at BCUSU, An amazing
            independent charity, that gives students' their best experience at
            University. My main focus is to build and design accessible, smooth
            and slick student digital experiences.
          </p>

          {/* history section */}
          <h2 className="uppercase">Experience</h2>
          <div className="grid grid-cols-3 gap-4 text-gray-300">
            <div>2021 - PRESENT</div>
            <div className="col-span-2">
              <p>Web Developer | BCUSU</p>
              <br />
              <p className="mb-4">
                Working with Graphics/UI Designer to Develop and design more
                accessible, informative and smoother navigation to students at
                Birmingham City University.
              </p>
              <span className="rounded-full bg-gray-300 text-gray-900 m-auto mr-2 pr-4 pl-4 p-1 text-xs font-bold">
                JavaScript
              </span>
              <span className="rounded-full bg-gray-300 text-gray-900 m-auto mr-2 pr-4 pl-4 p-1 text-xs font-bold">
                JQuery
              </span>
              <span className="rounded-full bg-gray-300 text-gray-900 m-auto mr-2 pr-4 pl-4 p-1 text-xs font-bold">
                Figma
              </span>
            </div>
          </div>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Nathan's resume (opens in new tab)"
            className="flex items-center justify-center gap-2 rounded-md border-1 border-white p-2 w-full sm: 1/2 hover:bg-white hover:text-black cursor-pointer duration-250 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
          >
            <TbFileCv aria-hidden="true" focusable="false" />
            View Resume
          </a>

          {/* contact section */}
          <h2 className="uppercase mt-12">Contact</h2>
          <div className="grid grid-cols-3 gap-4">
            <a
              href="mailto:nathan.parchment47@gmail.com"
              className="flex items-center justify-center gap-2 rounded-md border-1 border-white p-2 w-full sm: 1/2 hover:bg-white hover:text-black cursor-pointer duration-250 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
            >
              <IoIosMail aria-hidden="true" focusable="false" />
              Email
            </a>

            <a
              href="https://github.com/Nathan-47"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Nathan's GitHub profile (opens in new tab)"
              className="flex items-center justify-center gap-2 rounded-md border-1 border-white p-2 w-full sm: 1/2 hover:bg-white hover:text-black cursor-pointer duration-250 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
            >
              <FaGithub aria-hidden="true" focusable="false" /> Github
            </a>

            <a
              href="https://www.linkedin.com/in/nathanparchment/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Nathan's LinkedIn profile (opens in new tab)"
              className="flex items-center justify-center gap-2 rounded-md border-1 border-white p-2 w-full sm: 1/2 hover:bg-white hover:text-black cursor-pointer duration-250 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
