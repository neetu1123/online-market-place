<template>
    <div class="bg-white my-12">
      <div v-if="!filteredProducts.length" class="flex flex-col items-center justify-center h-[50vh]">
      <div class="text-gray-500 tracking-wide space-y-5">
        <div class="flex justify-center items-center space-x-4">
          <span
            class="block animate-spin border-t-2 h-20 w-20 border-l-2 border-b-2 border-r-2 border-t-primary-light rounded-full border-gray-300"
            
          />
        </div>
        <div class="flex flex-col items-center animate-pulse">
          <p>Please wait.</p>
          <p>It'll just take a moment.</p>
        </div>
      </div>
    </div>
      <div v-else class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-between my-2">
          <h2 class="text-3xl font-semibold">Products</h2>
        </div> 
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-gray-200 my-10">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="p-4 border-r border-b border-gray-200 group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
          <NuxtLink :to="`/product/${product.id}`">

            <div class="rounded-lg overflow-hidden h-64">
              <img
                :src="product.image"
                :alt="product.imageAlt"
                class="w-full h-full object-center object-contain transition-opacity group-hover:opacity-75"
              >
            </div>
            <div class="p-4 text-center">
              <h3 class="text-lg font-semibold text-gray-900 hover:underline">
                  {{ product.title.substring(0, 19) }}...
              </h3>
              <div class="mt-2">
                <div class="flex justify-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                     product?.rating && product?.rating.rate > rating ? 'text-yellow-400' : 'text-gray-200',
                      'h-5 w-5'
                    ]"
                  />
                </div>
                <p class="text-sm text-gray-500 mt-1">{{ product.rating?.count }} reviews</p>
              </div>
              <p class="text-base font-medium text-gray-900 mt-4">${{ product.price }}</p>
            </div>
          </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { useProductStore } from "@/stores/useProductStore";
import { StarIcon } from '@heroicons/vue/24/solid';
import type { ProductDetail } from '~/types/products';

const productStore = useProductStore();
const { productList, searchTerm } = storeToRefs(productStore);
const filteredProducts = ref<ProductDetail[]>([]);
let debounceTimeout: ReturnType<typeof setTimeout>;

// Function to filter products
const filterProducts = () => {
  if (!searchTerm.value) {
    filteredProducts.value = productList.value;
  } else {
    const lowerSearchTerm = searchTerm.value.toLowerCase();
    filteredProducts.value = productList.value.filter(product =>
      product.title.toLowerCase().includes(lowerSearchTerm) ||
      product.category.toLowerCase().includes(lowerSearchTerm)
    );
  }
};
// Watcher with debouncing
watch(searchTerm, () => {
  // Clear the previous timeout if it exists
  clearTimeout(debounceTimeout);

  // Set a new timeout to delay filtering
  debounceTimeout = setTimeout(() => {
    filterProducts();
  }, 300); // Adjust delay as needed
});


onMounted(async() => {
 await productStore.fetchProductList();
 filterProducts()
})


</script>