import { writeFileSync } from "fs";
import RSS from "rss";
import { allBlogs } from ".contentlayer/data";

async function generate() {
  const feed = new RSS({
    title: "Azat Hafizov",
    site_url: "https://metastack.ml",
    feed_url: "https://metastack.ml/feed.xml",
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://metastack.ml/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
