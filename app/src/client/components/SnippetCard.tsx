import Link from "next/link";
import Image from "next/image";

export default function SnippetCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border border-grey-200 dark:border-slate-800 rounded-lg p-4 w-full bg-white dark:bg-slate-900"
        {...rest}
      >
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-1 text-slate-700 dark:text-slate-400">{description}</p>
      </a>
    </Link>
  );
}
