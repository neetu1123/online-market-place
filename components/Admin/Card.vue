<template>
    <div class="bg-white">
      <div class="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <h1 class="text-3xl font-semibold mb-12">Admin panel</h1>
        <div class="mt-4 flow-root">
          <div class="-my-2">
            <div class="box-content py-2 relative">
              <div
                class="grid gap-8 sm:grid-cols-2 mx-2"
              >
                <NuxtLink
                  v-for="category in categories"
                  :key="category.name"
                  :href="category.href"
                  class="relative w-full h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      :src="category.imageSrc"
                      :alt="category.name"
                      class="w-full h-full object-center object-cover"
                    >
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    {{ category.name }}
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
  
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const categories = [
    {
      name: 'Our Products',
      href: '/admin/product',
      imageSrc: '/women.png',
    },
    {
      name: 'User panel',
      href: '/admin/users',
      imageSrc: '/user.jpg',
    },
  ]
  </script>