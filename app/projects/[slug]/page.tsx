import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/app/data/projects";
import { ProjectSidebar } from "./projectSidebar";

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
    <main className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row">
      
      <p className="block lg:hidden -mb-8 underline">On this page</p>
      <ProjectSidebar sections={sections} />

      <article className="min-w-0 flex-1 space-y-10">
        <section id="overview">
          <h1>{project.title}</h1>
          {/* add demo button  */}
          <p className="mt-5 max-w-prose">{project.description}</p>
          {/* add github icon  */}
        </section>

        <section id="challenges">
          {/* what i learnt section */}
          <h2>What I learnt</h2>
          <ul className="max-w-prose list-disc space-y-4 pl-2 mt-3 sm:pl-6">
            {project.challenge.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="improvements">
          {/* future improvements */}
          <h2>Future Improvements</h2>
          <p className="max-w-prose">{project.description}</p>
        </section>

        <section id="screenshots">
          {/* project screenshots  */}
          <h2>UX/UI</h2>
          <p className="max-w-prose">{project.description}</p>
        </section>
      </article>
    </main>
  );
}
