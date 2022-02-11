import Head from "next/head";
import Script from "next/script";
import { cn } from "@client/utils";

const CalendlyButton = () => {
  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <button
        className={cn(
          "w-full px-5 py-3 sm:w-auto sm:py-2 rounded-lg",
          "bg-gradient-to-br from-purple-100 to-purple-200",
          "hover:from-purple-200 hover:to-indigo-200"
        )}
        onClick={() => {
          // @ts-ignore
          window.Calendly?.initPopupWidget({
            url: "https://calendly.com/azat-hafizov/15min",
          });
        }}
      >
        Schedule
      </button>
    </>
  );
};

export default CalendlyButton;
