import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nathan Parchment | Blog",
  description:
    "My coding blog covering all that I do within my job, side projects and daily life.",
  icons: {
    icon: "/np_logo.png",
  },
};

export default function blog() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between mb-14 py-0 px-6 sm:py-1 sm:px-16 sm:items-start">
        <ul role="list" className="mt-12 divide-y divide-white/5 w-full group">
          <li>
            <Link
              className="flex w-full items-center justify-between py-2 mb-4 mt-4 transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
              href="/blog/powerautomate"
            >
              <p className="text-xl font-semibold text-white">Power Automate</p>

              <p className="text-xl text-white">30/12/2025</p>
            </Link>
          </li>

          <li>
            <a
              className="flex w-full items-center justify-between py-2 mb-4 mt-4 transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
              href=""
            >
              <p className="text-xl font-semibold text-white">
                Marketing Conference
              </p>

              <p className="text-xl text-white">30/12/2025</p>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
