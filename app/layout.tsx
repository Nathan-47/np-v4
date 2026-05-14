import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// fonts
const archivo = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--heading-font",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
// fonts

export const metadata: Metadata = {
  title: "Nathan Parchment",
  description: "My personal website",
  icons: {
    icon: '/np_logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.className} min-h-full flex flex-col`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
