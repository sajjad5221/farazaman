import { config } from "./Url";

export default async function Fetch(endpoint: string) {
  const url = config.url;

  const staticFetch = await fetch(url + endpoint);
  if (!staticFetch.ok) {
    throw new Error("Failed To Fetch Data.");
  }
  return staticFetch.json();
}
