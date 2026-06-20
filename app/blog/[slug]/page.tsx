import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { blogs } from "@/app/data/blogs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// dynamic metadata for each blog
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs[slug as keyof typeof blogs];

  if (!blogs) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `Nathan Parchment | ${blog.title}`,
    description: blog.description,
    icons: {
      icon: "/np_logo.png",
    },
  };
}
// dynamic metadata for each blog

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // make sure slug string can be found in blogs object
  const blog = blogs[slug as keyof typeof blogs];

  if (!blogs) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between mb-14 py-0 px-6 sm:py-1 sm:px-16 sm:items-start">
        <section>
          <h1>{blog.title}</h1>
          <p className="mt-5 max-w-prose">{blog.description}</p>
          <p>{blog.content1}</p>
          <Image
            className="w-full h-auto"
            src={blog.image1}
            alt="power automate workflow"
            width={500}
            height={100}
          />
        </section>
      </main>
    </div>
  );
}
