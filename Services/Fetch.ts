// import { config } from "./Url";

// export default async function Fetcher(url: string) {
//   //   const url = config.url;

//   const staticFetch: any = await fetch(url).then((data) => {
//     if (!data.ok) {
//       throw new Error("Failed To Fetch Data.");
//     }
//     return staticFetch.json();
//   });
// }
export default async function FetchApi(url: string) {
  const data = fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  const parsedData: any = (await data).json();

  return await parsedData;
}
