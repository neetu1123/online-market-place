
<template>
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-baseline sm:justify-between">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
        </div>
  
        <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div 
          class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden cursor-pointer sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
          @click="navigateTo(`/category?category=women's clothing`)"
          >
            <img src="/menand women.webp" alt="Women's dress" class="object-center object-cover hover:opacity-75" >
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div class="p-6 flex items-end">
              <div>
                <h3 class="font-semibold black">
                  <NuxtLink :to="`/category?category=women's clothing`">
                    New Arrivals
                  </NuxtLink>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-black">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img src="/jwellery.avif" alt="Jwelary" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" >
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 class="font-semibold text-white">
                    <NuxtLink :to="`/category?category=jewelery`">
                    <span class="absolute inset-0" />
                    Jwellery
                </NuxtLink>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <img src="/electronic.webp" alt="Electronic" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" >
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 class="font-semibold text-white">
                    <NuxtLink :to="`/category?category=electronics`">
                    <span class="absolute inset-0" />
                   Electronics Digit
                </NuxtLink>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  