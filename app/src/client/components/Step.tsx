import { cn } from "@client/utils";

export default function Step({ number, title }) {
  return (
    <div className="step h-10 flex items-center gap-x-4 mt-8">
      <div
        className={cn(
          "w-10 h-10 flex-shrink-0 flex items-center justify-center border-2 border-slate-200 font-bold",
          "text-lg leading-none dark:border-slate-800 rounded-full text-blue-500"
        )}
      >
        {number}
      </div>
      <h3 className="my-0 tracking-tight font-bold">{title}</h3>
    </div>
  );
}
