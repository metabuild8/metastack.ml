import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import cn from "classnames";

import Footer from "@client/components/common/Footer";
import MobileMenu from "@client/components/common/MobileMenu";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-slate-800 dark:text-slate-200"
            : "font-normal text-slate-600 dark:text-slate-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg",
          "hover:bg-slate-200 dark:hover:bg-slate-800 transform-gpu transition-all duration-300"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Azat Hafizov - Developer, writer, metacreator.",
    description:
      "DL Engineer, TypeScript/Python enthusiast, and course creator.",
    image: "https://metastack.ml/avatar.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://metastack.ml${router.asPath}`}
        />
        <link rel="canonical" href={`https://metastack.ml${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Azat Hafizov" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@metabuild8" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav
          className={cn(
            "flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16",
            "border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
          )}
        >
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
            <NavItem href="/tweets" text="Tweets" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-slate-200 rounded-lg dark:bg-slate-600 flex items-center justify-center  hover:ring-2 ring-slate-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && resolvedTheme === "dark" ? (
              <SunIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className={cn(
          "flex flex-col justify-center max-w-2xl mx-auto mb-16 px-8",
          "md:block md:p-0"
        )}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
