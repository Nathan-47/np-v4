import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlog, getBlogSlugs } from "@/app/lib/blogs";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `Nathan Parchment | ${blog.meta.title}`,
    description: blog.meta.description,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  return (
    <main className="w-full max-w-3xl mx-auto mb-14 px-6 sm:px-16">
      <article className="prose prose-invert max-w-none">
        <h1>{blog.meta.title}</h1>
        <p>{blog.meta.description}</p>
        <MDXRemote source={blog.content} />
      </article>
    </main>
  );
}
