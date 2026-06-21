import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import { ProjectSidebar } from "./projectSidebar";
import { FaGithub } from "react-icons/fa6";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// dynamic metadata for each project
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `Nathan Parchment | ${project.title}`,
    description: project.description,
    icons: {
      icon: "/np_logo.png",
    },
  };
}
// dynamic metadata for each project

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // make sure slug string can be found in projects object
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  const sections = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "challenges",
      label: "Challenges",
    },
    {
      id: "improvements",
      label: "Future Improvements",
    },
    {
      id: "screenshots",
      label: "Screenshots",
    },
  ];

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 mb-14 lg:flex-row">
      <p className="block lg:hidden -mb-8 underline">On this page</p>
      <ProjectSidebar sections={sections} />

      <article className="min-w-0 flex-1 space-y-20">
        <section id="overview">
          <h1>{project.title}</h1>
          <Link href={project.demoLink}>
            <button
              className="bg-white text-black font-bold w-full p-2 mt-6 mb-3 cursor-pointer rounded-sm transition duration-250 ease-in-out hover:bg-[#1d1d1d] hover:text-white hover:outline hover:outline-2 hover:outline-white hover:outline-offset-2 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
            >
              DEMO
            </button>
          </Link>

          <p className="mt-5 max-w-prose">{project.description}</p>
          <Link
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View FitrQuest repository (opens in new tab)"
            className="flex items-center justify-center gap-2 mb-15 mt-15 rounded-md p-2 hover:bg-white hover:text-black cursor-pointer duration-250 focus:outline-none focus:ring-3
             focus:ring-[#f9c908]"
          >
            <FaGithub aria-hidden="true" focusable="false" /> View code
          </Link>
        </section>

        <section id="challenges">
          <h2>What I learnt</h2>
          <ul className="max-w-prose list-disc space-y-4 pl-2 mt-3 sm:pl-6">
            {project.challenge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* only show if project has snippet code to display  */}
        {project.snippet && (
          <Image
            className="m-auto mt-10 mb-10 w-full h-auto"
            src={project.snippet}
            alt={project.alt3}
            width={500}
            height={500}
          />
        )}

        <section id="improvements">
          <h2>Future Improvements</h2>
          <ul className="max-w-prose list-disc space-y-4 pl-2 mt-3 sm:pl-6">
            {project.improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="screenshots">
          <h2>Screenshots</h2>
          <Image
            className="m-auto mt-10 mb-10 w-full h-auto"
            src={project.image1}
            alt={project.alt1}
            width={500}
            height={500}
          />
          <Image
            className="m-auto mt-10 mb-10 w-full h-auto"
            src={project.image2}
            alt={project.alt2}
            width={500}
            height={500}
          />
        </section>
      </article>
    </main>
  );
}
