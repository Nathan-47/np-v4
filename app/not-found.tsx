import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="bg-white text-black ml-2 font-bold p-3 rounded-sm hover:bg-[#1d1d1d] hover:text-white hover:outline hover:outline-2 hover:outline-white hover:outline-offset-2 focus:outline-none focus:ring-3 focus:ring-[#826e21]"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
