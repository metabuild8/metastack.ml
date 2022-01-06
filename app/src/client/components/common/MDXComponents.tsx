import Link from "next/link";
import Image from "next/image";

import ProsCard from "@client/components/ProsCard";
import ConsCard from "@client/components/ConsCard";
import Gumroad from "@client/components/metrics/Gumroad";
import Analytics from "@client/components/metrics/Analytics";
import YouTube from "@client/components/metrics/Youtube";
import Step from "@client/components/Step";
import ImageWithTheme from "@client/components/common/ImageWithTheme";
import { Pre } from "@client/components/mdx/Pre";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl"
      {...props}
    />
  );
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Analytics,
  ConsCard,
  Gumroad,
  ProsCard,
  Step,
  YouTube,
  pre: Pre,
};

export default MDXComponents;
