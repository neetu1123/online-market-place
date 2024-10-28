<template>
 <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  <NuxtSnackbar />
    <GenericDialogBox v-if=!isFirstVisit :open="isOpen"
    >
      <div class="text-left  transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div class="block absolute top-0 right-0 sm:pt-4 sm:pr-4">
                <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="isOpen = false">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
               
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div  class="text-xl leading-6 font-medium text-gray-900">
                    Welcome to OMP!
                  </div>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Please log in to enjoy a personalized shopping experience and access exclusive deals. Start exploring our collection today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </GenericDialogBox>
  </div>
</template>
<script setup lang="ts">
const isFirstVisit = ref(false);
const isOpen = ref(false)
 onMounted(()  => {
    if (!localStorage.getItem('visited')) {
      isFirstVisit.value = true;
      isOpen.value = true
      localStorage.setItem('visited', 'true'); // Set a flag to remember user's visit
    }
  })
</script>
