import useSWR from "swr";

import fetcher from "@client/utils/fetcher";
import { Views } from "@client/utils/types";
import MetricCard from "@client/components/metrics/Card";

export default function AnalyticsCard() {
  const { data } = useSWR<Views>("/api/views", fetcher);

  const pageViews = new Number(data?.total);
  const link = "https://metastack.ml";

  return (
    <MetricCard
      header="All-Time Views"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
