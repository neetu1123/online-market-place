<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ productDetails.title }}</h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">{{ productDetails.price }}</p>

            <div class="ml-4 pl-4 border-l border-gray-300">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[productDetails.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">{{ productDetails.rating }} reviews</p>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ productDetails.description }}</p>
          </div>

          <div class="mt-6 flex items-center">
            <CheckIcon class="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
            <p class="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center relative max-w-md">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <div
            class="relative w-full h-full cursor-pointer"
            @mousemove="showMagnifier"
            @mouseleave="hideMagnifier"
          >
            <NuxtImg
              :src="productDetails.image"
              :alt="productDetails.imageAlt"
              class="w-full h-full object-center object-cover"
            />
            <div v-if="magnifierVisible" class="magnifier" :style="magnifierStyle"></div>
          </div>
          <div v-if="magnifierVisible" class="zoomed-image" :style="zoomedImageStyle"></div>
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form @submit.prevent>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
              <RadioGroup v-model="selectedSize">
                <RadioGroupLabel class="block text-sm font-medium text-gray-700">Size</RadioGroupLabel>
                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[active ? 'ring-2 ring-indigo-500' : '', 'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none']"
                    >
                      <RadioGroupLabel as="p" class="text-base font-medium text-gray-900">{{ size.name }}</RadioGroupLabel>
                      <RadioGroupDescription as="p" class="mt-1 text-sm text-gray-500">{{ size.description }}</RadioGroupDescription>
                      <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
            <div class="mt-4">
              <a href="#" class="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon class="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </a>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                @click="addToCart()"
              >Add to bag</button>
            </div>
            <div class="mt-6 text-center">
              <a href="#" class="group inline-flex text-base font-medium">
                <ShieldCheckIcon class="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                <span class="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const productStore = useProductStore()
const { productDetails } = storeToRefs(productStore);
const selectedSize = ref()
const product = {
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const reviews = { average: 4, totalCount: 1624 }

const useCart = useCartStore()

// Magnifier functionality
const magnifierVisible = ref(false)
const magnifierStyle = ref({
  top: '0',
  left: '0',
  background: 'url(' + productDetails.image + ') no-repeat',
  backgroundSize: '200%',
  width: '100px', // Set the width of the magnifier
  height: '100px', // Set the height of the magnifier
  position: 'absolute',
  border: '2px solid #000',
  borderRadius: '50%',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
})

// Style for the zoomed image
const zoomedImageStyle = ref({
  width: '200px', // Width of the zoomed-in image
  height: '200px', // Height of the zoomed-in image
  background: `url(${productDetails.image}) no-repeat`,
  backgroundSize: '200%', // Adjust this based on your zoom level
  position: 'absolute',
  display: 'none', // Initially hidden
  border: '2px solid #000',
  borderRadius: '8px',
  zIndex: 5,
})

function showMagnifier(event) {
  magnifierVisible.value = true;
  const { offsetX, offsetY } = event;
  const { width, height } = event.target.getBoundingClientRect();

  magnifierStyle.value.left = `${offsetX}px`;
  magnifierStyle.value.top = `${offsetY}px`;

  // Adjust background position based on mouse position
  magnifierStyle.value.backgroundPosition = `${(offsetX / width) * 100}% ${(offsetY / height) * 100}%`;

  // Show the zoomed image
  zoomedImageStyle.value.display = 'block';
  zoomedImageStyle.value.backgroundPosition = `${(offsetX / width) * 100}% ${(offsetY / height) * 100}%`;
  zoomedImageStyle.value.top = `${event.clientY - 100}px`; // Adjust position of zoomed image
  zoomedImageStyle.value.left = `${event.clientX + 10}px`; // Adjust position of zoomed image
}

function hideMagnifier() {
  magnifierVisible.value = false;
  zoomedImageStyle.value.display = 'none'; // Hide the zoomed image
}

async function addToCart() {
  const decodedData = decodedUserData()
  const { sub } = decodedData
  const payload = {
    userId: sub,
    date: formattedDate(),
    products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
  }
  console.log({ payload });

  await useCart.Addcart(payload)
}
</script>

<style scoped>
.magnifier {
  z-index: 10;
  pointer-events: none;
}
.zoomed-image {
  z-index: 5;
  position: absolute; /* Ensure it’s positioned correctly */
}
</style>
