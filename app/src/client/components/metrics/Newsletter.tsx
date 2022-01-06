import useSWR from "swr";

import fetcher from "@client/utils/fetcher";
import { Subscribers } from "@client/utils/types";
import MetricCard from "@client/components/metrics/Card";

export default function NewsletterCard() {
  const { data } = useSWR<Subscribers>("/api/subscribers", fetcher);

  const subscriberCount = new Number(data?.count);
  const link = "https://www.getrevue.co/profile/metabuild8";

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
      isCurrency={false}
    />
  );
}
