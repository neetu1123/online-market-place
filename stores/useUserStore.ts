import { USER_API } from '@/types/users';
import { User_Api } from '~/api/userAPI';
import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';
import { Auth_API } from '~/api/authAPI';


export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  /**
   * ==========================================gettters====================================
   */
  getters: {
   
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
     async authentication(userData) {
      try {
        const {url, method} = Auth_API.Post.auth
          const response=await fetchAPI(url, method, userData);
          const {token} = response
          localStorage.setItem('token',token);
          this.token = token;
         return  response;
      }catch(error) {
        throw error;
      }
  },
       
  }
})

export default useUserStore;