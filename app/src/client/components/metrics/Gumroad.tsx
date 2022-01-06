import useSWR from "swr";

import fetcher from "@client/utils/fetcher";
import { Gumroad } from "@client/utils/types";
import MetricCard from "@client/components/metrics/Card";

export default function GumroadCard() {
  const { data } = useSWR<Gumroad>("/api/gumroad", fetcher);

  const sales = new Number(data?.sales);
  const link = "https://gumroad.com/";

  return (
    <MetricCard header="Gumroad Sales" link={link} metric={sales} isCurrency />
  );
}
