import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';
import { Auth_API } from '~/api/authAPI';
import type {FormData} from "@/types/users"


export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    isAdmin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTczMDE5NTUwN30.vRx3XPBmgZphAu2YRPnYNeDNnN_0vWHKPqBBuYd6UlQ',
  }),
  /**
   * ==========================================gettters====================================
   */
  getters: {
   isAdmin(state) {
    return (state.token === state.isAdmin)
   }
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
    /**
     * Function for post username , password
     * @param userData 
     * @returns 
     */
     async authentication(userData: FormData) {
      const{onFailure} = useShowSnackbar()
      try {
        const {url, method} = Auth_API.Post.auth
          const response=await fetchAPI(url, method, userData);
          const {token} = response
          localStorage.setItem('token',token);
          this.token = token;
         return  response;
      }catch(error) {
        onFailure('Login failed')
        throw error;
      }
  },
       
  }
})

export default useUserStore;