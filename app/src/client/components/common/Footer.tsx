import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-slate-500 hover:text-slate-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="max-w-2xl w-full mx-auto mt-16 mb-8 flex flex-col justify-center items-start">
      <hr className="w-full border-1 border-slate-200 dark:border-slate-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-slate-500 hover:text-slate-600 transition">
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-slate-500 hover:text-slate-600 transition">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/metabuild8">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/metabuild8">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com">YouTube</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-slate-500 hover:text-slate-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-slate-500 hover:text-slate-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
