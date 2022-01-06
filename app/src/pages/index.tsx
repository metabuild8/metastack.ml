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
                blurDataURL="data:image/png;base64,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uqApcqSpaIunJYpV4BgR1ZqToXrvRyGEI2zqukbF/KSqN/EeKwLWUQmQp5hQQ5mjErOQmKrdw8cxUlvUuhNKflRVXF3XJxzeXhTlzXIxR8qMVqhJJMI3BT7MWZQFjbeUtouIpdXr4oIniDkp+baq4rxXimLBPMs2no3Ho729vYvUJSs9x7CTsGShbQUjFfPCM6vnRLVwJm7RUwHnEZFHIvIAwOVlwcHzf3myPWJr659Pn43Hf5ngOTPsMux3OTfs0W9FJJFjcljwdFrg9jNSr5xeWWVwahnn3BfWWowx2A/ef5fRaMTDh5uMRqP9/f39P9Is+2qS5TxPc/J8wdwbMm/Ym2Zsj8c8fbbDLJ2RFwVlWX9srXtgrUME7GCwzPb2Nru7u6RpSlmWfzdNc8d7/1ld1yt5nlNWDUXVkM5zDmaHHMwy0sPF5nSWfVhV5UbTNFhriSKHtdYwmUxYLBaEEDi2fiAi3wN3y4bDJphVNVFXxW1VTfhhvii/Tg+z72bZfD9Lp9R1TZIkdDptXJpmeH8UH2MsIvLqh7mB2I3Kh2+rxuPihChKjtLiPcHnHPiKTqfDbDajKAr+A6JRhACkaoBcAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAOEoAMABAAAAAEAAAOEAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdNRsqPoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMDZUMjI6NDA6NTkrMDA6MDBKLA8dAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTA2VDIyOjQwOjIzKzAwOjAwlcTh9gAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AOTAwSCER1QAAABh0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24AOTAw1S7wowAAAFx0RVh0ZXhpZjpVc2VyQ29tbWVudAA2NSwgODMsIDY3LCA3MywgNzMsIDAsIDAsIDAsIDgzLCA5OSwgMTE0LCAxMDEsIDEwMSwgMTEwLCAxMTUsIDEwNCwgMTExLCAxMTZAuB9yAAAAKHRFWHRpY2M6Y29weXJpZ2h0AENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIxfb3uJgAAABd0RVh0aWNjOmRlc2NyaXB0aW9uAFNBTVNVTkcKzE1NAAAAF3RFWHR4bXA6UGl4ZWxYRGltZW5zaW9uADkwMFIuXFgAAAAXdEVYdHhtcDpQaXhlbFlEaW1lbnNpb24AOTAwzyG9LgAAABp0RVh0eG1wOlVzZXJDb21tZW50AFNjcmVlbnNob3TT4LJ8AAAAAElFTkSuQmCC"
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
      </div>
    </Container>
  );
}
