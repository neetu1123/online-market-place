<template>
  <div class="bg-white">
    <!-- Mobile menu -->
   
    <header class="relative overflow-hidden">
      <!-- Hero section -->
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-52 lg:pb-48">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
          </div>
          <div>
            <div class="mt-10 sm:mt-52">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <NuxtImg src="/jwellary_image.jpeg" alt="Jwelary" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/laptop_images.jpeg" alt="Laptop" class="w-full h-full object-center object-cover" /></div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/mens_dress.jpeg" alt="Men's cloth" class="w-full h-full object-center object-cover" /></div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/mobile.webp" alt="Mobile" class="w-full h-full object-center object-cover" /></div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/women_dress.webp" alt="Women's dress" class="w-full h-full object-center object-cover" /></div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/women_2.webp" alt="Women's dress" class="w-full h-full object-center object-cover" /></div>
                      <div class="w-44 h-64 rounded-lg overflow-hidden">
                        <NuxtImg src="/men_3.jpg" alt="Men's dress" class="w-full h-full object-center object-cover" /></div>
                    </div>
                  </div>
                </div>
              </div>

              <NuxtLink to="/product" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Category section -->
      <section aria-labelledby="category-heading" class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="category-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <NuxtLink href="/category?category=women's clothing">
              <NuxtImg src="/women_4.jpg" alt="Women's cloth" class="object-center object-cover group-hover:opacity-75" >
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div class="p-6 flex items-end">
                <div>
                  <h3 class="font-semibold text-black">
                      New Arrivals
                    </h3>
                    <p aria-hidden="true" class="mt-1 text-sm text-black">
                      Shop now
                    </p>
                  </div>
                </div>
              </nuxtimg></NuxtLink>
            </div>
            <div class="group hidden sm:block aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <NuxtImg src="/laptop_2.jpeg" alt="Laptop" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" >
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <NuxtLink to="/category?category=electronics">
                      <span class="absolute inset-0" />
                      Accessories
                    </NuxtLink>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </nuxtimg></div>
            <div class="group hidden sm:block aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
              <NuxtImg src="/bangel_1.webp" alt="Diamond Bangel" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" >
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <NuxtLink to="/category?category=jewelery">
                      <span class="absolute inset-0" />
                      Workspace
                    </NuxtLink>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </nuxtimg></div>
          </div>
        </div>
      </section>

      <!-- Featured section -->
      <section aria-labelledby="cause-heading">
        <div class="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div class="absolute inset-0 overflow-hidden">
            <NuxtImg src="/background_image.avif" alt="background image" class="w-full h-full object-center object-cover" /></div>
          <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
          <div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 id="cause-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
            <p class="mt-3 text-xl text-white">We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.</p>
            <a  class="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
          </div>
        </div>
      </section>

      <!-- Favorites section -->
      <section aria-labelledby="favorites-heading">
        <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Our Favorites</h2>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            <div v-for="favorite in favorites" :key="favorite.id" class="group relative">
              <div class="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                <NuxtImg :src="favorite.imageSrc" :alt="favorite.imageAlt" class="w-full h-full object-center object-cover" /></div>
              <h3 class="mt-4 text-base font-semibold text-gray-900">
                <NuxtLink :to="favorite.href">
                  <span class="absolute inset-0" />
                  {{ favorite.name }}
                </NuxtLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ favorite.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA section -->
      <section aria-labelledby="sale-heading">
        <div class="pt-32 overflow-hidden sm:pt-14">
          <div class="bg-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative pt-48 pb-16 sm:pb-24">
                <div>
                  <h2 id="sale-heading" class="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
                    Final Stock.
                    <br >
                    Up to 50% off.
                  </h2>
                  <div class="mt-6 text-base">
                    <NuxtLink to="/product" class="font-semibold text-black">Shop the sale<span aria-hidden="true"> &rarr;</span></NuxtLink>
                  </div>
                </div>

                <div class="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                  <div class="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/women_4.jpg" alt="women's dress" /></div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/women_2.webp" alt="women's dress" /></div>
                    </div>
                    <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/women_dress.webp" alt="women's dress" /></div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/men_2.jpeg" alt="men's dress" /></div>
                    </div>
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/bangel_1.webp" alt="Bangel" /></div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <NuxtImg class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="/laptop_images.jpeg" alt="Laptop" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">

const favorites = [
  {
    id: 1,
    name: "Women's cloth",
    price: '$32',
    href: `/category?category=women's clothing`,
    imageSrc: '/women_3.jpeg',
    imageAlt: "Women's cloth",
  },
  {
    id: 2,
    name: "Men's cloth",
    price: '$32',
    href: `/category?category=men's clothing`,
    imageSrc: '/men_3.jpg',
    imageAlt: "Men's cloth",
  },
  {
    id: 3,
    name: 'Diamond Ring',
    price: '$36',
    href: '/category?category=jewelery',
    imageSrc: '/ring.jpg',
    imageAlt:
      "Diamond Ring",
  },
]



</script>