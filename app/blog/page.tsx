import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathan Parchment | Blog",
  description: "My coding blog covering all that I do within my job and side projects.",
  icons: {
    icon: '/np_logo.png',
  }
};

export default function blog() {
    return (
        <>
            <h1>This is the blog page</h1>
        </>
    )
}