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
      return state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
    createCart(products) {
      if (!this.cart.length) {
        this.cart.push(products);
      } else {
        const updateCart = this.cart.find(item => item.product.id === products.product.id);
        if (updateCart) {
          updateCart.quantity += 1;
        } else {
          products.quantity = 1;
          this.cart.push(products);
        }
      }
    }
  },
})

export default useCartStore;