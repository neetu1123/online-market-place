import { Auth_API } from "~/api/authAPI"
import { fetchAPI } from "./useFetchAPI"

export async function authentication(userData) {
    try {
      const {url, method} = Auth_API.Post.auth
        const response=await fetchAPI(url, method, userData);
        const {token} = response
        localStorage.setItem('token',token);
        console.log(response)
    }catch(e) {
      console.log(e)
    }
}