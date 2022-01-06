import { useState } from "react";

import Container from "@client/components/common/Container";
import BlogPost from "@client/components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { pick } from "@client/utils/utils";
import { allBlogs } from ".contentlayer/data";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog - Azat Hafizov"
      description="Thoughts on the Metaverse industry, programming, tech and my personal life."
    >
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        Blog
      </h1>
      <p className="mb-4 text-slate-600 dark:text-slate-400">
        Use the search below to filter by title.
      </p>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-slate-900 bg-white border border-slate-200 rounded-md dark:border-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-slate-100"
        />
        <svg
          className="absolute w-5 h-5 text-slate-400 right-3 top-3 dark:text-slate-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        All Posts
      </h3>
      {!filteredBlogPosts.length && (
        <p className="mb-4 text-slate-600 dark:text-slate-400">
          No posts found.
        </p>
      )}
      {filteredBlogPosts.map((post) => (
        <BlogPost key={post.title} {...post} />
      ))}
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt"])
  );

  return { props: { posts } };
}
