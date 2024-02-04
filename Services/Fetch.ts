export default async function FetchApi(url: string) {
  // Perform a GET request to the specified URL
  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  // Check if the response was successful
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  // Parse the response data as JSON
  const parsedData = await response.json();

  return parsedData;
}
