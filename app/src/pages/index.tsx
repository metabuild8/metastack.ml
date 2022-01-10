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
          "w-full flex flex-col-reverse items-start sm:flex-row",
          "transform-gpu transition-transform"
        )}
      >
        <div className="flex-1 flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
            Azat Hafizov
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400 mb-4">
            Chief Technical Officer{" "}
            <span className="font-semibold">@Hyred @Andro @ApTask</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Writing about how anyone can use the Metaverse to build a personal
            metacognition toolbox to team up with machines and other humans in
            the creator economy market.
          </p>
        </div>
        <div className="w-[120px] sm:w-[176px] mb-8 sm:mb-0 mr-auto">
          <span className="w-[120px] h-[120px] sm:w-[176px] sm:h-[176px] block rounded-full overflow-hidden">
            <Image
              alt="Azat Hafizov"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="bg-indigo-100 rounded-full"
              blurDataURL="data:image/png;base64,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"
              placeholder="blur"
            />
          </span>
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
    </Container>
  );
}
