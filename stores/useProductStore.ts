import { API_Product_List } from '~/api/productAPI';
import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';
import type { ProductDetail } from '~/types/products';


export const useProductStore = defineStore('product', {
  state: () => ({
    productList: []  as ProductDetail[],
    productDetails: {} as ProductDetail,
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
    /**
     * Function for set search input 
     * @param term 
     */
    setSearchTerm(term: string) {
       this.searchTerm = term
    },
    /**
     * Function for fetch product list
     * @returns 
     */
     async fetchProductList() {
      const {onFailure} = useShowSnackbar()
      if(this.productList.length) return
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(url);
           this.productList = response;
           return response;
        }catch(error){
          onFailure('Failed to fetch product list')
          throw error
        }
       },
       /**
        * Function for fetch product details
        * @param id 
        */
       async fetchProductDetails(id: string) {
      const {onFailure} = useShowSnackbar()
        try {
            const {url} = API_Product_List.Get.productList
           const response = await fetchAPI(`${url}/${id}`);
           this.productDetails = response;
        }catch(error){
            onFailure('Failed to fetch product detail')
            throw error;
        }
       },

       setStoreEmpty() {
        Object.keys(this.productDetails).forEach(key => {
          this.productDetails[key] = '';
        });
       }
  }
})

export default useProductStore;