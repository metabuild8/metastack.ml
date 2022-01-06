import Image from "next/image";
import Link from "next/link";

import Container from "@client/components/common/Container";
import BlogPostCard from "@client/components/BlogPostCard";
import Subscribe from "@client/components/common/Subscribe";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { cn } from "@client/utils";

export default function Home() {
  return (
    <Container>
      <div
        className={cn(
          "w-full max-w-2xl mx-auto flex flex-col justify-center items-start",
          "border-slate-200 dark:border-slate-700"
        )}
      >
        <div
          className={cn(
            "w-full flex flex-col-reverse items-start sm:flex-row",
            "transform-gpu transition-transform"
          )}
        >
          <div className="flex-1 flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
              Azat Hafizov
            </h1>
            <h2 className="text-gray-600 dark:text-gray-400 mb-4">
              Chief Technical Officer at{" "}
              <span className="font-semibold">Hyred</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Writing about how anyone can use the Metaverse to build a personal
              metacognition toolbox to collaborate with machines and other
              humans in the creator economy market.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Azat Hafizov"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="bg-indigo-100 rounded-full"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="w-full flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
          <BlogPostCard
            date="Dec 21"
            title="AOL for Metaverse"
            slug="aol-for-metaverse"
          />
        </div>
        <Link href="/blog">
          <a
            className={cn(
              "h-6 flex items-center gap-1.5 mt-8 text-slate-600 dark:text-slate-400",
              "hover:text-slate-800 dark:hover:text-slate-200"
            )}
          >
            Read all posts
            <ArrowRightIcon className="w-5 h-5 text-slate-400" />
          </a>
        </Link>
        <span className="h-16" />
        <Subscribe />
      </div>
    </Container>
  );
}
