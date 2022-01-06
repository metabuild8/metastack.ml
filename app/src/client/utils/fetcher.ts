/* global RequestInfo, RequestInit, fetch */
/* eslint no-undef: "error" */

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
