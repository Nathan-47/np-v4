import Link from "next/link";
import { getProject, getProjectSlugs } from "@/app/lib/projects";

export default function ProjectPage() {
  const posts = getProjectSlugs()
    .map((slug) => ({ slug, ...getProject(slug)!.meta }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="w-full max-w-3xl mx-auto mb-14 px-6 sm:px-16 space-y-8">
      <h1 className="mb-8">Projects</h1>
      <p className="-mt-6 italic">Logs of my builds and designs</p>

      <div className="group/list space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block transition-opacity duration-300 group-hover/list:opacity-40 hover:opacity-100!"
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
