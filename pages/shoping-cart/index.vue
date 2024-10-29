<template>
  <div class="bg-white">
    <div v-if="!cart.length" class="flex flex-col items-center justify-center h-[600px] ">
    <div  class="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 sm:w-[450px] text-center">
        <!-- Shopping Cart Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l3.6-7H6.4L7 13zm0 0L5 6H3m3 7l1 5m4-5v5m6-5v5M6 6h.01M16 6h.01M9 16h6" />
        </svg>
        
        <!-- Message Text -->
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Looks like you haven’t added any items to your cart yet.</p>
        
        <!-- Browse Button -->
        <NuxtLink href="/" class="bg-blue-500 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Start Shopping
        </NuxtLink>
    </div>
   </div>

      <div v-else class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
      
          <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16" @submit.prevent>
              <section aria-labelledby="cart-heading" class="lg:col-span-7">
                  <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
                  <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
                      <li v-for="(item, productIdx) in cart" :key="productIdx" class="flex py-6 sm:py-10">
                          <div class="flex-shrink-0"> <img :src="item.product.image" :alt="item.product.imageAlt" class="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" > </div>
                          <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                              <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                  <div>
                                      <div class="flex justify-between">
                                          <h3 class="text-sm"> <a class="font-medium text-gray-700 hover:text-gray-800"> {{ item.product.title }} </a> </h3>
                                      </div>
                                      <div class="mt-1 flex text-sm"/>
                                      <p class="mt-1 text-sm font-medium text-gray-900">${{ item.product.price }}</p>
                                  </div>
                                  <div class="mt-4 sm:mt-0 sm:pr-9"> <label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ item.product.title }}</label>
                                     <div
                                    :id="`quantity-${productIdx}`"  :name="`quantity-${productIdx}`"
                                     class=" text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                 <span class="relative z-0 inline-flex shadow-sm rounded-md">
                                   <button
                                   type="button" 
                                   class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                   @click="subQuantity(item.product.id as string)"
                                   >
                                     <span class="sr-only">Previous</span>
                                     <MinusIcon class="h-5 w-5" aria-hidden="true" />
                                   </button>
                                   <span class="flex items-center border-t border px-3">  {{ item.quantity }}</span>
                                  
                                   <button
                                   type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                   @click="addQuantity(item.product.id as string)"
                                   >
                                     <span class="sr-only">Next</span>
                                     <PlusIcon class="h-5 w-5" aria-hidden="true" />
                                   </button>
                                 </span>
                                                                   
                                  </div>
                                      <div class="absolute top-0 right-0"> 
                                        <button
                                        type="button" class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                        @click="deleteHandler(item.product.id as string)"
                                        > <span class="sr-only">Remove</span>
                                              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                                          </button> </div>
                                  </div>
                              </div>
                             
                          </div>
                      </li>
                  </ul>
              </section> <!-- Order summary -->
              <section aria-labelledby="summary-heading" class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
                  <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>
                  <dl class="mt-6 space-y-4">
                    
                      <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                          <dt class="text-base font-medium text-gray-900"> Order total </dt>
                          <dd class="text-base font-medium text-gray-900"> ${{ totalCount }}</dd>
                      </div>
                  </dl>
                  <div class="mt-6"> <button type="button" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" @click="checkout">Checkout</button> </div>
              </section>
          </form>
      </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
  
const cartStore = useCartStore();
const {cart} = storeToRefs(cartStore);

 const totalCount = computed(() => {
   const totalAmount = cart.value.reduce((acc,item) => acc+ (item.product.price * item.quantity ),0);
   return totalAmount
 })

/**
 * Functuion for add quantity
 */
function addQuantity(id: string) {
  cartStore.increaseQuantity(id);
}
/**
 * Function for sub quantity
 */
function subQuantity(id: string) {
  cartStore.decreaseQuantity(id);
}
/**
 * Function for delete
 * @param id 
 */
function deleteHandler(id: string) {
    cartStore.deleteCartItem(id)
}

function checkout() {
 const {onSuccess} = useShowSnackbar();
 onSuccess('Order Successfully ')
}
  </script>