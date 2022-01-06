import Link from "next/link";
import useSWR from "swr";
import cn from "classnames";

import fetcher from "@client/utils/fetcher";
import { Views } from "@client/utils/types";

export default function BlogPostCard({ date, title, slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full py-3 transform-gpu hover:scale-[1.01] transition-transform">
          <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-4">
            <div className="flex-1 flex items-center">
              <div className="mr-6 text-left text-indigo-400">{date}</div>
              <h4 className="flex-1 text-lg font-medium w-full text-slate-800 dark:text-slate-100">
                {title}
              </h4>
            </div>
            <div className="hidden md:flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
              <p
                className={cn(
                  "w-32 md:mb-0 mr-2 ml-10 sm:ml-0 text-left sm:text-right",
                  "text-slate-500 dark:text-slate-400"
                )}
              >
                {views} views
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
