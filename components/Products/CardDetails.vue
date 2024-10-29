<template>
  <div class="bg-white">
    <div v-if="!Object.keys(productDetails).length" class="flex flex-col items-center justify-center h-[50vh]">
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

    <div v-else class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ productDetails.title }}</h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">${{ productDetails.price }}</p>

            <div class="ml-4 pl-4 border-l border-gray-300">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[productDetails.rating.rate > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">{{ productDetails.rating.count }} reviews</p>
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
            class="relative w-[70%] h-750%] cursor-pointer"
          >
            <NuxtImg
              :src="productDetails.image"
              :alt="productDetails.imageAlt"
              class="w-full h-full object-center object-cover"
            />
          </div>
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
                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2  ">
                  <RadioGroupOption
                    v-for="size in product.sizes"
                    :key="size.name"
                    v-slot="{ active, checked }"
                    as="template"
                    :value="size"
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
              v-if="checkItemInCart"
                type="submit"
                class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                @click="navigateTo('/shoping-cart')"
              >Go to Cart</button>
              <button
              v-else
                type="submit"
                class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                @click="addToCart(productDetails)"
              >Add to Cart</button>
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
  <GenericDialogBox :open="isOpen"
    >
      <div class="text-left  transform transition-all sm:align-middle max-w-lg sm:w-full sm:p-6">
              <div class="block absolute top-0 right-0 sm:pt-4 sm:pr-4">
                <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="isOpen = false">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
               
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div  class="text-xl leading-6 font-medium text-gray-900 pb-2">
                    Log In to Start Shopping
                  </div>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please log in to add items to your cart and complete your purchase. Create an account or sign in to enjoy a seamless shopping experience.
                    </p>
                  </div>
                  <button
                  class="bg-indigo-600 border ml-32 mt-6 border-transparent rounded-md py-2 px-6  text-base font-medium text-white hover:bg-indigo-700"
                  @click="navigateTo('/log-in')"
                  >
                  Go to log in page
                </button>
                </div>
               
              </div>
            </div>
    </GenericDialogBox>
</template>

<script setup lang="ts">
import { CheckIcon, QuestionMarkCircleIcon, StarIcon ,XMarkIcon} from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import type { Product } from '~/types/products';

const productStore = useProductStore();

const { productDetails } = storeToRefs(productStore);
const cartStore = useCartStore();
const {cart}= storeToRefs(cartStore);
const userStore = useUserStore();
const {token} = storeToRefs(userStore);
const selectedSize = ref();
const isOpen = ref(false)
const product = {
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const reviews = { average: 4, totalCount: 1624 }
const route = useRoute();
const {id} = route.params;

const checkItemInCart = computed(() => cart.value.find(item => item.product.id == id ))

    const addToCart = (product: Product) => {
      if(!token.value) {
        isOpen.value = true;
        return;
      }
      const products = {
        product,
        quantity: 1
      }
      cartStore.createCart(products);
      
    };
</script>


