import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    cartId: null,
  }),
  /**
   * ==========================================gettters====================================
   */
  getters: {
    getCartItems(state) {
      return state.cart.length
    },
   
  },
  /**
   * ============================================ settter ==================================
   */
  actions: {
    createCart(products) {
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
    increaseQuantity(productId) {
      const product = this.cart.find(item => item.product.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    
    decreaseQuantity(productId) {
      const product = this.cart.find(item => item.product.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else if (product && product.quantity === 1) {
        this.cart = this.cart.filter(item => item.product.id !== productId);
      }
    },
    deleteCartItem(productId) {
      const { onSuccess} = useShowSnackbar()
     this.cart = this.cart.filter(item => item.product.id !== productId);
     onSuccess('Successfully Item Deletded')

    }
  },
})

export default useCartStore;