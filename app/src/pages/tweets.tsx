import Container from "@client/components/common/Container";
import Tweet from "@client/components/common/Tweet";
import { getTweets } from "@client/utils/twitter";

export default function Tweets({ tweets }) {
  return (
    <Container
      title="Tweets - Azat Hafizov"
      description="A collection of tweets that inspire me or make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          This is a collection of tweets that inspire me or make me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    "1394117380062674946",
    "1324074284600446983",
  ]);

  return { props: { tweets } };
}
