
type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' ;
export async  function fetchAPI(url: string, method?: method, data?: null) {
    const options = {
        method, // GET, POST, PUT, DELETE
        headers: {
          "Content-Type": "application/json"
        },
      };
      if (data && ['POST', 'PUT', 'DELETE'].includes(method as method)) {
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

/**
 * Function for parse jswt
 * @param token 
 */
function parseJwt (token: string) {
  const {onFailure}= useShowSnackbar();
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload); // Parse and return the token's payload
  } catch (error) {
    onFailure('Invalid token')
    return null;
  }
}
/**
 * Function for decoded user data
 */
export function decodedUserData() {
  const {onFailure}= useShowSnackbar();
  const token = localStorage.getItem('token'); 
 
  if(!token) return; 
  if (token) {
  const decodedToken = parseJwt(token); // Decode the token
  return decodedToken;
} else {
  onFailure('No token found')
}
}