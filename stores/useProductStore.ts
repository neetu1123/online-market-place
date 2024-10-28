import { API_Product_List } from '~/api/productAPI';
import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';


export const useProductStore = defineStore('product', {
  state: () => ({
    productList: [] ,
    productDetails: [],
    searchTerm: ''
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

    setSearchTerm(term) {
       this.searchTerm = term
    },

     async fetchProductList() {
      if(this.productList.length) return
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(url);
           this.productList = response;
        }catch(error){
          throw error
        }
       },
       async fetchProductDetails(id: number) {
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(`${url}/${id}`);
           this.productDetails = response;
        }catch(error){
            console.log(error)
        }
       },

       setStoreEmpty() {
        this.productDetails = []
       }
  }
})

export default useProductStore;