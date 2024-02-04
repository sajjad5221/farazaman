export default async function GetCsrfToken(url: string) {
        // Perform a GET request to the specified URL
        const response = await fetch(url);
      
        // Parse the response data as JSON
        const jsonData = await response.json();
      
        // Extract the CSRF token from the JSON data
        const token = jsonData["csrfToken"];
      
        return token;
      }
      