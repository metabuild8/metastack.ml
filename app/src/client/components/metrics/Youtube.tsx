import useSWR from "swr";

import fetcher from "@client/utils/fetcher";
import { YouTube } from "@client/utils/types";
import MetricCard from "@client/components/metrics/Card";

export default function YouTubeCard() {
  const { data } = useSWR<YouTube>("/api/youtube", fetcher);

  const subscriberCount = new Number(data?.subscriberCount);
  const viewCount = new Number(data?.viewCount);
  const link = "https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw";

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Views"
        link={link}
        metric={viewCount}
        isCurrency={false}
      />
    </div>
  );
}
