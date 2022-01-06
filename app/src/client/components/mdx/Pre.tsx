import { useEffect, useRef, useState } from "react";
import { cn } from "@client/utils";
import { copyToClipboard } from "@client/utils";

type Props = {
  children: JSX.Element;
  className: string;
};

export const Pre = ({ children, className, ...props }: Props): JSX.Element => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2600);
    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      copyToClipboard(preRef.current.innerText);
      setCopied(true);
    }
  };

  return (
    <div className="group relative">
      <pre
        {...props}
        ref={preRef}
        className={cn(className, "focus:outline-none")}
      >
        <button
          type="button"
          aria-label="Copy to Clipboard"
          onClick={onClick}
          disabled={copied}
          className={cn(
            "absolute px-2 py-1 rounded-md top-3.5 right-3.5",
            "text-xs text-white font-light font-sans bg-black bg-opacity-20",
            copied ? "block" : "hidden group-hover:block"
          )}
        >
          {copied ? "copied" : "copy"}
        </button>
        {children}
      </pre>
    </div>
  );
};
