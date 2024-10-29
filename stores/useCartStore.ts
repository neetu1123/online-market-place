import { defineStore } from "pinia";
import type { Cart } from "~/types/products";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Cart[],
    cartId: null,
  }),
  /**
   * ==========================================gettters====================================
   */
  getters: {
    /**
     * Funtion for get cart item length
     * @param state 
     * @returns 
     */
    getCartItems(state) {
      return state.cart.length
    },
   
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
    /**
     * Function for create and add the item to cart
     * @param products 
     */
    createCart(products: Cart) {
      const { onSuccess} = useShowSnackbar()
      if (!this.cart.length) {
        this.cart.push(products);
        onSuccess('Successfully New Item Added')
      } else {
        const updateCart = this.cart.find(item => item.product.id === products.product.id);
        if (updateCart) {
          updateCart.quantity += 1;
        onSuccess('Successfully Item Added')
         
        } else {
          products.quantity = 1;
          this.cart.push(products);
         onSuccess('Successfully New Item Added')
        }
      }
    },
    /**
     * Function for increase the quantity
     * @param productId 
     */
    increaseQuantity(productId: string) {
      const product = this.cart.find(item => item.product.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    /**
     * Function for decarse the quantity
     * @param productId 
     */
    decreaseQuantity(productId: string) {
      const product = this.cart.find(item => item.product.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else if (product && product.quantity === 1) {
        this.cart = this.cart.filter(item => item.product.id !== productId);
      }
    },
    /**
     * Function for delete cart item
     * @param productId 
     */
    deleteCartItem(productId: string) {
      const { onSuccess} = useShowSnackbar()
     this.cart = this.cart.filter(item => item.product.id !== productId);
     onSuccess('Successfully Item Deletded')

    }
  },
})

export default useCartStore;