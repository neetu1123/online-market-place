import { USER_API } from '@/types/users';
import { User_Api } from '~/api/userAPI';
import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';


export const useUserStore = defineStore('user', {
  state: () => ({
    productList: [] ,
    productDetails: []
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
     async authentication(data) {
        try {
            const {url, method} = User_Api.Post.user
           const response = await fetchAPI(url, method, data);
           
           console.log(response)
        }catch(error){
            console.log(error)
        }
       },
       
  }
})

export default useUserStore;