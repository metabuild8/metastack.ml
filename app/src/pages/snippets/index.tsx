import { allSnippets } from ".contentlayer/data";
import Container from "@client/components/common/Container";
import SnippetCard from "@client/components/SnippetCard";
import { pick } from "@client/utils/utils";
import type { InferGetStaticPropsType } from "next";

export default function Snippets({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets - Azat Hafizov"
      description="A collection of code snippets - including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          Code snippets I am using every day. Feel free to edit and improve.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ["slug", "title", "logo", "description"])
  );

  return { props: { snippets } };
}
