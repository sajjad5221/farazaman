export default async function GetCsrfToken(url:string) {
        const response = await fetch(url);
 
        const jsonData = await response.json();

        const token = jsonData["csrfToken"];
    
        return token;


}

