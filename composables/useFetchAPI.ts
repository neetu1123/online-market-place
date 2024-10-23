
type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' ;
export async  function fetchAPI(url: string, method?: method, data?: null) {
    const options = {
        method, // GET, POST, PUT, DELETE
      };
      if (data && ['POST', 'PUT', 'DELETE'].includes(method)) {
        options.body = JSON.stringify(data);
      }
      try {
        const response = await fetch(url, options);
    
        // Check if response is okay (status code 200–299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // Parse the response as JSON
        const result = await response.json();
        return result;
    
      } catch (error) {
        // Handle error (network or API)
        console.error('Fetch error:', error);
        throw error;
      }
}