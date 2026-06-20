"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#1d1d1d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-20">
        <div className="flex h-26 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img className="ml-6" src="/np_logo.png" alt="NP logo" width={30} height={30} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/blog"
              className="relative
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full"
            >
              Blog
            </Link>

            <Link
              href="/projects"
              className="relative
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full"
            >
              Projects
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1d1d1d]">
          <div className="flex flex-col space-y-6 px-4 py-1 mb-6 text-xl">
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="relative
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full"
            >
              Blog
            </Link>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="relative
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300
              hover:after:w-full"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
