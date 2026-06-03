import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathan Parchment | Projects",
  description: "All projects built by Nathan.",
  icons: {
    icon: '/np_logo.png',
  }
};

export default function project() {
    return (
        <>
            <h1>This is the projects page</h1>
        </>
    )
}