import useSWR from "swr";

import fetcher from "@client/utils/fetcher";
import { GitHub } from "@client/utils/types";
import MetricCard from "@client/components/metrics/Card";

export default function GitHubCard() {
  const { data } = useSWR<GitHub>("/api/github", fetcher);

  const stars = new Number(data?.stars);
  const link = "https://github.com/metabuild8";

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={stars}
      isCurrency={false}
    />
  );
}
