import Link from "next/link";

import Analytics from "@client/components/metrics/Analytics";
import Newsletter from "@client/components/metrics/Newsletter";
import Container from "@client/components/common/Container";
import GitHub from "@client/components/metrics/Github";
import Gumroad from "@client/components/metrics/Gumroad";

export default function Dashboard() {
  return (
    <Container
      title="Dashboard - Azat Hafizov"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Dashboard
      </h1>
      <div className="mb-8">
        <p className="mb-4">
          Metrics are built with Next.js API routes deployed as serverless
          functions. I use this dashboard to track various metrics across
          platforms like GitHub and more.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <Analytics />
        <GitHub />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        {/* <Gumroad /> */}
        {/* <Newsletter /> */}
      </div>
    </Container>
  );
}
