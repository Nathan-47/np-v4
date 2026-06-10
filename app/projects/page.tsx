import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fitHero from "../images/fitrquest/fitrquest_thumbnail.png";
import quizHero from "../images/rolequiz/role_thumbnail.png";
import socHero from "../images/socquiz/soc_thumbnail.png";
import marvHero from "../images/marvel/marvelapi_thumbnail.png";

export const metadata: Metadata = {
  title: "Nathan Parchment | Projects",
  description: "All projects built by Nathan.",
  icons: {
    icon: "/np_logo.png",
  },
};

export default function project() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between mb-14 py-0 px-6 sm:py-1 sm:px-16 sm:items-start">
        <div className="grid grid-cols-1 gap-8 !mt-6 sm:my-20">
          <h1 className="font-bold text-xl mb-8 sm:!-mb-8">Projects</h1>
        </div>

        {/* project grid section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 group">
          <Link href="/fitrquest">
            <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
              <Image
                className="mb-8 w-full h-auto"
                src={fitHero}
                alt="fitrquest landing page"
              />

              <h2 className="mb-4 uppercase">FitrQuest</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  JWT
                </span>
              </div>

              <p className="project-text text-gray-300">
                Built for users struggling with how to train and how to stay
                fit. Take a quest that provides a personalised path to your new
                training.
              </p>
            </div>
          </Link>

          <Link href="/officerquiz">
            <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
              <Image
                className="mb-8 !w-100 h-auto"
                src={quizHero}
                alt="officer role landing page"
              />
              <h2 className="mb-4 uppercase">Officer Role Quiz</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  JSON
                </span>
              </div>

              <p className="project-text text-gray-300">
                A quiz for students of Birmingham City University to help
                provide a clearer idea of what role they fit best in elections
                season.
              </p>
            </div>
          </Link>

          <Link href="/socquiz">
            <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
              <Image
                className="mb-8 !w-100 h-auto"
                src={socHero}
                alt="marvel battle game landing page"
              />
              <h2 className="mb-4 uppercase">Society finder tool</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  API
                </span>
              </div>

              <p className="project-text text-gray-300">
                A tool finder that allows students to find a society that
                matches their interest.
              </p>
            </div>
          </Link>

          <Link href="/marvelapi">
            <div className="project-card transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100">
              <Image
                className="mb-8 w-400 h-auto"
                src={marvHero}
                alt="marvel battle game landing page"
              />
              <h2 className="mb-4 uppercase">Marvel Search</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  JavaScript
                </span>
                <span className="px-3 py-1 text-[12px] font-bold bg-[#c4c5ca] text-[#292929] rounded-full">
                  API
                </span>
              </div>

              <p className="project-text text-gray-300">
                A Marvel character search that retrieves character name, bio,
                and image via API.
              </p>
            </div>
          </Link>
        </div>
        {/* project grid section  */}
      </main>
    </div>
  );
}
