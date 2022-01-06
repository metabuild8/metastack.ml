import { useState, useRef } from "react";
import Link from "next/link";
// import useSWR from "swr";

// import fetcher from "@server/lib/fetcher";
import {
  Form,
  FormState,
  // Subscribers
} from "@client/utils/types";
import SuccessMessage from "@client/components/SuccessMessage";
import ErrorMessage from "@client/components/common/ErrorMessage";
import LoadingSpinner from "@client/components/common/LoadingSpinner";
import { cn } from "@client/utils";

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  // const { data } = useSWR<Subscribers>("/api/subscribers", fetcher);
  const subscriberCount = 1; // new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div
      className={cn(
        "p-6 my-4 w-full rounded-lg border-2 border-indigo-100 dark:border-slate-800",
        "bg-gradient-to-br from-indigo-50 via-indigo-50 to-[#f3e8ff70]",
        "dark:from-indigo-500 dark:to-purple-500"
      )}
    >
      <p className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
        I've got more coming...
      </p>
      <p className="my-1 text-slate-800 dark:text-slate-200">
        Get early access to my "Future metacognition" work
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className={cn(
            "mt-1 px-4 py-2 pr-32 block w-full rounded-md",
            "focus:ring-indigo-500 focus:border-indigo-500 border-slate-300",
            "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          )}
        />
        <button
          className={cn(
            "w-28 h-8 flex items-center justify-center absolute right-1 top-1 px-4 font-medium rounded",
            "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100",
            "hover:bg-slate-200 hover:dark:bg-slate-600"
          )}
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : "Subscribe"}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-slate-800 dark:text-slate-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : "-"
          } subscribers `}
          &bull;{" "}
          <Link href="/newsletter">
            <a>1 chapter has been published</a>
          </Link>
        </p>
      )}
    </div>
  );
}
