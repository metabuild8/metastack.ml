import Link from "next/link";

import Container from "@client/components/common/Container";
import { cn } from "@client/utils";

export default function NotFound() {
  return (
    <Container title="404 - Azat Hafizov">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        451 - Unavailable For Legal Reasons
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Why show a generic 404 when I can make it sound mysterious? It seems
        you've found something that used to exist, or you spelled something
        wrong. I'm guessing you spelled something wrong. Can you double check
        that URL?
      </p>
      <div className="flex justify-center">
        <Link href="/">
          <a
            className={cn(
              "p-1 sm:p-4 w-64 font-bold mx-auto text-center rounded-md",
              "text-black dark:text-white bg-slate-200 dark:bg-slate-800"
            )}
          >
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
