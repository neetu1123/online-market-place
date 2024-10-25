<template>
  <div class="bg-white">
      <div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section aria-labelledby="cart-heading" class="lg:col-span-7">
                  <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>
                  <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
                      <li v-for="(item, productIdx) in cart" :key="productIdx" class="flex py-6 sm:py-10">
                          <div class="flex-shrink-0"> <img :src="item.product.image" :alt="item.product.imageAlt" class="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" /> </div>
                          <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                              <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                  <div>
                                      <div class="flex justify-between">
                                          <h3 class="text-sm"> <a :href="item.product.href" class="font-medium text-gray-700 hover:text-gray-800"> {{ item.product.title }} </a> </h3>
                                      </div>
                                      <div class="mt-1 flex text-sm">
                                      </div>
                                      <p class="mt-1 text-sm font-medium text-gray-900">{{ item.product.price }}</p>
                                  </div>
                                  <div class="mt-4 sm:mt-0 sm:pr-9"> <label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ item.product.title }}</label>
                                     <div :id="`quantity-${productIdx}`"  :name="`quantity-${productIdx}`"
                                     class="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                         {{ item.quantity }}
                                  </div>
                                      <div class="absolute top-0 right-0"> <button type="button" class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"> <span class="sr-only">Remove</span>
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
                      <div class="flex items-center justify-between">
                          <dt class="text-sm text-gray-600"> Subtotal </dt>
                          <dd class="text-sm font-medium text-gray-900"> $99.00 </dd>
                      </div>
                    
                      <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                          <dt class="text-base font-medium text-gray-900"> Order total </dt>
                          <dd class="text-base font-medium text-gray-900"> ${{ totalCount }}</dd>
                      </div>
                  </dl>
                  <div class="mt-6"> <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Checkout</button> </div>
              </section>
          </form>
      </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'
  
const cartStore = useCartStore();
const {cart} = storeToRefs(cartStore)
 const totalCount = computed(() => {
   const totalAmount = cart.value.reduce((acc,item) => acc+ (item.product.price * item.quantity ),0);
   return totalAmount
 })
onMounted(async() => {
console.log(cart.value, "cart value")
  
})
  </script>