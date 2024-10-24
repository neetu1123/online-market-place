<template>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 class="sr-only">Products</h2>
  
        <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="product in productList" :key="product.id" class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
            <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <img :src="product.image" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <div class="pt-10 pb-4 text-center">
              <h3 class="text-sm font-medium text-gray-900">
                <NuxtLink :to="`/product/${product.id}`">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }} {{ product.id }}
                </NuxtLink>
              </h3>
              <div class="mt-3 flex flex-col items-center">
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                <div class="flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating.rate > rating ? 'text-yellow-400' : 'text-gray-200', 'flex-shrink-0 h-5 w-5']" aria-hidden="true" />
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ product.reviewCount }} reviews</p>
              </div>
              <p class="mt-4 text-base font-medium text-gray-900">{{ product.price }}</p>
              <button @click="addToCart(product)" class="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { StarIcon } from '@heroicons/vue/24/solid'

const productStore = useProductStore()
const {productList} = storeToRefs(productStore)

 
  </script>
  <style scoped>
  /* Optional: Add some additional styling to enhance the card look */
  .group:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  </style>