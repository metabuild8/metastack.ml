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
          <div className="flex items-center gap-4">
            <div className="text-indigo-400">
              {views
                ? new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(views)
                : "---"}{" "}
              views
            </div>
            <div className="flex-1 flex items-center gap-2 truncate">
              <h4
                className={cn(
                  "flex-1 text-lg font-medium truncate",
                  "text-slate-800 dark:text-slate-100"
                )}
              >
                {title}
              </h4>
              <div className="hidden sm:block text-slate-500 dark:text-slate-400">
                {date}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
