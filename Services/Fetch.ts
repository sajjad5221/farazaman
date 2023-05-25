import { data } from "autoprefixer";
import { config } from "./Url";

export default async function Fetch(endpoint: string) {
  const url = config.url;

  const staticFetch:any = await fetch(url + endpoint).then(data => {if (!data.ok) {
    throw new Error("Failed To Fetch Data.");
  }
  console.log(staticFetch.json());
  return staticFetch.json();
  
})
  
  
}
