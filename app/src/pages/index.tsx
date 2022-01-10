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
              blurDataURL="data:image/png;base64,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rwHqtqGsCmbzOZM853wyI5+dU7YNSWLI0pRhv0+W9plXNcenp/zPV6c8PDomn5edO1ODakRR1ILF/K2q/v3XdRbsq6/+GSEE8jxfgPuUzz77lKOjQ+q6Inh9VzWmSHxZNRIj+CCUdeBsVnJWeM5mJXlR4DXihiOCTXl4PGHv/iF7hzOmszlVVZPnOeeTc/J5Ttt6JMpPQN40xmKM7YCv9YpijNgf/OBPmUwm7O/vs7e3x5dffsmjR48oy3IRXQwi8o6IfAr8+Tr9MUZmRUFZlpRlRV231K1nVrQcnUw5OjnjZFZSliVN01AUBZPJhPPzc2az2Wt5nv/DUrWMMVhrLrXpYozYF198gQcPHnD37l329vY4PDxkPp9zkROuGpIfAz8FXlDV55YfaIEYInUTaNpI1JQmwrRsmNUN87KmXSQMIQSqqnq/KIo/ns1mH0wmE+bzOUVRLAKFeayXaLe2trl//wH7+w85PT2jrhtgCeyi07UYExH5qTHmX0TkGRH5rnFdlUcEJEVchhpHEwJt8DS1p65rQgg/F5G/EJG/U9Xzuq4pioLpdEqe57Rti0hXByVJskqi3SeffMLSIYcQVj2aKwnE1TbxR8AdYCOE+iWi/ImPertum+8VVbnZa/oT5/g4SZL3hsPhr+bz+UdN00y996vULoSw7F5QliV1XdO29apXPh6PO4DT6fQiN4MnArr6vBaipol172J5V1UIoaVpGnxTkyY9UpeRZZFer9eVmwt/u/7NGCNFUXBwcIAxMBwOGY/HpGmKcw47Ho9X6f1689ta+9jck8CvwqQKQSPGGrIs62oPDD74Lly27SoYXO5XXwSKGANZlrGxscFoNCJJEsz6oq4rb54I5nLn/mKEaEASMEJQJah2/2YQAzj6/f5Kp67usy65ZQRb6mTTNAD8P6W18Q06V1yYAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAOEoAMABAAAAAEAAAOEAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdNRsqPoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMDlUMTg6NTI6NTErMDA6MDB0bGpAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTA5VDE4OjUyOjUxKzAwOjAwBTHS/AAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AOTAwSCER1QAAABh0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24AOTAw1S7wowAAAFx0RVh0ZXhpZjpVc2VyQ29tbWVudAA2NSwgODMsIDY3LCA3MywgNzMsIDAsIDAsIDAsIDgzLCA5OSwgMTE0LCAxMDEsIDEwMSwgMTEwLCAxMTUsIDEwNCwgMTExLCAxMTZAuB9yAAAAKHRFWHRpY2M6Y29weXJpZ2h0AENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIxfb3uJgAAABd0RVh0aWNjOmRlc2NyaXB0aW9uAFNBTVNVTkcKzE1NAAAAF3RFWHR4bXA6UGl4ZWxYRGltZW5zaW9uADkwMFIuXFgAAAAXdEVYdHhtcDpQaXhlbFlEaW1lbnNpb24AOTAwzyG9LgAAABp0RVh0eG1wOlVzZXJDb21tZW50AFNjcmVlbnNob3TT4LJ8AAAAAElFTkSuQmCC"
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
