import Link from "next/link";
import { getBlog, getBlogSlugs } from "@/app/lib/blogs";

export default function BlogsPage() {
  const posts = getBlogSlugs()
    .map((slug) => ({ slug, ...getBlog(slug)!.meta }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="w-full max-w-3xl mx-auto mb-14 px-6 sm:px-16 space-y-8">
      <h1>Writings</h1>
      <p className="-mt-6 italic">Random thoughts and blogs</p>

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
