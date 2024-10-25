import { defineStore } from "pinia";
import { fetchAPI } from '~/composables/useFetchAPI';


export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    cartId: null
  }),
  /**
   * ==========================================gettters====================================
   */
  getters: {
    cartItems(state) {
      return state.cart
    },
    cartCount(state) {
        return state.cart.reduce((acc, item) => acc + item.quantity, 0)
    },
    totalAmount(state) {
      return  state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
     async createCart(product) {
        try {
           const response = await fetchAPI('https://fakestoreapi.com/carts', "POST", product);
           
           console.log(response)
           this.cart = response;
           this.cartId = response.id;
           localStorage.setItem('cartId', this.cartId!);
        }catch(error){
            console.log(error)
        }
       },

       async getCart(cartId) {
        try {
          const response = await fetchAPI(`https://fakestoreapi.com/carts/${cartId}`);
          this.cart = response.products;
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      },

      async addToCart(product) {
        console.log(product, "products product")
        console.log(this.cart.products.find(item => item.productId), "find")
        // const existingProduct = this.cart.find(item => item.id === product.id);
        // if (existingProduct) {
        //   existingProduct.quantity += product.quantity;
        // } else {
        //   this.cart.push(product);
        // }
  
        // try {
        //     const updatedCart = {
        //         userId: 1, 
        //         products: this.cart
        //       };
        //   const response = await fetchAPI(`https://fakestoreapi.com/carts/${this.cartId}`,updatedCart);
        //   console.log(response, "cart")
        // } catch (error) {
        //   console.error('Error adding to cart:', error);
        // }
      },
      async loadCartFromLocalStorage() {
        const cartId = localStorage.getItem('cartId');
        if (cartId) {
          await this.getCart(cartId);
        }
      }
  }
})

export default useCartStore;