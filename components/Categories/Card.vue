<template>
<div class="bg-white mt-12">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <div class="flex justify-between my-3">
      <h2 class="text-3xl font-semibold capitalize">{{ category }}</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-gray-200">
        <div
          v-for="item in categoryElement"
          :key="item.id"
          class="p-4 border-r border-b border-gray-200 group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
        >
        <NuxtLink :to="`/product/${item.id}`">
          <div class="rounded-lg overflow-hidden h-64">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              class="w-full h-full object-center object-contain transition-opacity group-hover:opacity-75"
            >
          </div>
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-900 hover:underline">
                {{ item.title.substring(0,19) }}...
            </h3>
            <div class="mt-2">
              <div class="flex justify-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    item.rating && item?.rating.rate > rating ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5'
                  ]"
                />
              </div>
              <p class="text-sm text-gray-500 mt-1">{{ item.rating?.count }} reviews</p>
            </div>
            <p class="text-base font-medium text-gray-900 mt-4">${{ item.price }}</p>
          </div>
        </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid';
import type { ProductDetail } from '~/types/products';

 defineProps({
  /**
   * catergory element
   */
    categoryElement: {
        type: Array as PropType<ProductDetail[]>,
        required: true
    },
    /**
     * category
     */
    category: {
        type: String,
        required: true
    }
})
</script>