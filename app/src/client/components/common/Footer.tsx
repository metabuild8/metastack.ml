import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <footer className="max-w-2xl w-full mx-auto mt-16 mb-8 flex flex-col justify-center items-start">
      <hr className="w-full border-1 border-slate-200 dark:border-slate-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-10 pb-16 sm:grid-cols-3 sm:gap-4">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-slate-500 hover:text-slate-600">Home</a>
          </Link>
          <Link href="/projects">
            <a className="text-slate-500 hover:text-slate-600">Projects</a>
          </Link>
          <Link href="/resume" passHref>
            <a className="text-slate-500 hover:text-slate-600">Resume</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/metabuild8">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/metabuild8">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://youtube.com">YouTube</ExternalLink>
          <ExternalLink href="https://dribbble.com">Dribbble</ExternalLink>
          <ExternalLink href="https://codecanyon.net">CodeCanyon</ExternalLink>
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
          <div
            className="text-slate-500 hover:text-slate-600 cursor-pointer"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && resolvedTheme === "dark" ? (
              <span className="flex items-center gap-2">
                Light
                <SunIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />{" "}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Dark
                <MoonIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />{" "}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
