<template>
    <div class="bg-white">
      <!-- Mobile menu -->
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
  
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div class="px-4 pt-5 pb-2 flex">
                <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
  
              <!-- Links -->
              <TabGroup as="div" class="mt-2">
               
                <TabPanels as="template">
                  <TabPanel  class="px-4 pt-10 pb-6 space-y-12">
                    <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                      <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                        <div>
                      
                          <ul role="list" class="mt-6 space-y-6">
                            <li v-for="(item, categoryIdx) in navigation" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">
                                {{ item.name }}
                              </a>
                            </li>
                          </ul>
                        </div>
                     
                      </div>
                     
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
  
              <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                </div>
              </div>
            </div>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
  
      <header class="relative">
      <nav aria-label="Top">
        <div class="bg-white border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="h-16 flex items-center justify-between">
              <div class="space-x-6 hidden lg:block">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink>Add Product</NuxtLink>
                <NuxtLink to="/shoping-cart">Shoping Cart</NuxtLink>
              </div>

              <div class="flex-1 flex items-center lg:hidden">
                <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400" @click="open = true">
                  <span class="sr-only">Open menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

               
              </div>

              <div class="flex-1 flex items-center justify-end">
                <div class="flex items-center lg:ml-8">
                  <div class="flex space-x-8">
                    <div class="flex relative items-center">
                      <input
                        type="text"
                        v-model="searchInput"
                        placeholder="Search..."
                        class="ml-2 p-2 pl-6 border border-gray-300 rounded-md w-full"
                        @input="updateSearchTerm"
                      />
                      <span class="absolute right-3 text-gray-400">
                        <MagnifyingGlassIcon class="w-5 h-5" aria-hidden="true" />
                      </span>
                   </div>
                  
                    <div class="relative">
                      <button @click="toggleUserMenu" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Account</span>
                        <UserIcon class="w-6 h-6 cursor-pointer" aria-hidden="true" />
                      </button>
                      <span v-if="user" class="ml-2 text-sm font-medium text-gray-700">{{ user.user.charAt(0) }}</span>
                      
                      <!-- Account Options Dialog -->
                      <TransitionRoot as="template" :show="isUserMenuOpen">
                        <Dialog as="div" class="absolute top-0 inset-0 z-40 mt-2 w-48 h-40 bg-white rounded shadow-lg" @close="isUserMenuOpen = false">
                          <div class="p-4">
                            <h2 class="text-lg font-semibold">Account Options</h2>
                            <div class="mt-2">
                              <button @click="logout" class="block w-full text-left p-2 hover:bg-gray-100">Logout</button>
                              <NuxtLink to="/sign-up" class="block w-full text-left p-2 hover:bg-gray-100">
                                <button
                                @click="isUserMenuOpen =false"
                                >

                                  Login
                                </button>
                              </NuxtLink>
                            </div>
                          </div>
                        </Dialog>
                      </TransitionRoot>
                    </div>

                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                    <div class="flow-root">
                      <a href="#" class="group -m-2 p-2 flex items-center">
                        <ShoppingCartIcon class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
  </template>
  
  <script setup lang="ts">
  import {
    Dialog,
    DialogOverlay,
    TabGroup,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue'
  import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Add Product', href: '/'},
    {name: 'Shopping Cart', href: '/shoping-cart'},
  ]
  
 const userProduct =  useProductStore();
 const  {searchTerm} = storeToRefs(userProduct)
const searchInput = ref('');
   const open = ref(false)
const isUserMenuOpen = ref(false)

const updateSearchTerm = (event) => {
  searchTerm.value = event.target.value;
  console.log(searchTerm.value)
};

const token = ref(localStorage.getItem('token'))
// Fetch user data from localStorage
const user = computed(() => {
  if (token.value) {
    const userData = decodedUserData() 
    return  userData// Assuming user data is stored as JSON string
  }
  return null
})

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const logout = () => {
  localStorage.removeItem('token');
  token.value = ""
  isUserMenuOpen.value =false
}
const filteredCategories = computed(() => {
  if (!searchTerm.value) {
    return navigation.categories;
  }

  return navigation.categories.map(category => ({
    ...category,
    featured: category.featured.filter(item => 
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    ),
    categories: category.categories.filter(item => 
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    ),
    collection: category.collection.filter(item => 
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    ),
    brands: category.brands.filter(item => 
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  })).filter(category => 
    category.featured.length || category.categories.length || category.collection.length || category.brands.length
  );
});
  </script>