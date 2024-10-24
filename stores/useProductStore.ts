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
      console.log({term})
       this.searchTerm = term
    },

     async fetchProductList() {
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(url);
           this.productList = response;
           console.log(response)
        }catch(error){
            console.log(error)
        }
       },
       async fetchProductDetails(id: number) {
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(`${url}/${id}`);
           this.productDetails = response;
           console.log(response)
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