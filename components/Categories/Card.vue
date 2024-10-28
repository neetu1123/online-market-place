<template>
<div class="bg-white mt-12">
    <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <div class="flex justify-between my-3">
      <h2 class="text-3xl font-semibold">{{ category }}</h2>
      <button type="button" class="inline-flex  items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="navigateTo('/category/add-new')"
        >
          Add new Category
          <PlusIcon class="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-gray-200">
        <div
          v-for="item in categoryElement"
          :key="item.id"
          class="p-4 border-r border-b border-gray-200 group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="rounded-lg overflow-hidden h-64">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              class="w-full h-full object-center object-contain transition-opacity group-hover:opacity-75"
            />
          </div>
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-900">
              <NuxtLink  class="hover:underline">
                {{ item.title }}
              </NuxtLink>
            </h3>
            <div class="mt-2">
              <div class="flex justify-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    item.rating.rate > rating ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5'
                  ]"
                />
              </div>
              <p class="text-sm text-gray-500 mt-1">{{ item.reviewCount }} reviews</p>
            </div>
            <p class="text-base font-medium text-gray-900 mt-4">{{ item.price }}</p>
            <div class="my-2 flex justify-between">
            <button class="inline-flex  items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
            @click="navigateTo(`/product/edit/${item.id}`)"
            >Edit</button>
            <button class="inline-flex  items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-lg text-white bg-red-400 hover:bg-red-500">Delete</button>
          </div>
            <button
             
              class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { StarIcon ,PlusIcon} from '@heroicons/vue/24/solid';

const props = defineProps({
    categoryElement: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
</script>