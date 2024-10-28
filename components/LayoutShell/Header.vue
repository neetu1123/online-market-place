<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0 text-white">
            <h1 class="text-3xl">OMP</h1>
          </div>
          <div class="hidden lg:block lg:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NuxtLink>
              <NuxtLink to="/product/add-new" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Product</NuxtLink>
           
             <!-- Profile dropdown -->
             <Menu as="div" class="relative flex-shrink-0 z-40 ">
              <div>
                <MenuButton class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                 
                  <span class="mt-2">category</span>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }"
                  v-for="category in categories"
                  >
                    <NuxtLink :to="`/category?category=${category}`" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{category}}</NuxtLink>
                  </MenuItem>
                 
                </MenuItems>
              </transition>
            </Menu>
          </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
              v-model="searchInput"
              id="search" 
               
              class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search"
               @input="updateSearchTerm"
              />
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <button type="button" class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <span class="flex"> <NuxtLink to="/shoping-cart"> <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" /></NuxtLink>{{cartCount}}
              </span>
              </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-4 relative flex-shrink-0 z-40">
              <div>
                <MenuButton class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                  <h1 v-if="user" class="profile-circle bg-blue-500 text-white flex items-center justify-center font-bold uppercase">{{ user.user.charAt(0) }}</h1>
                  <span v-else><UserCircleIcon  class="h-6" /></span>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                
                  <MenuItem v-slot="{ active }" v-if="user">
                    <NuxtLink to="/admin" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Admin</NuxtLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }"
                  v-if="!user"
                  >
                    <NuxtLink to="/log-in" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Log in</NuxtLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }"
                  v-else
                  >
                    <button class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="logout" >Log out</button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="a" href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</DisclosureButton>
        <DisclosureButton as="a" href="/add-new" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Porduct</DisclosureButton>
        <DisclosurePanel  as="a"  class="text-gray-300 hover:bg-gray-700 flex justify-between hover:text-white  px-3 py-2 rounded-md text-base font-medium cursor-pointer" @click="isCatergoryMenu = !isCatergoryMenu">
          Category
          <ChevronDownIcon
              :class="[isCatergoryMenu ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
              aria-hidden="true"
            />
        </DisclosurePanel>
        <DisclosureButton
         v-if="isCatergoryMenu"
              class="block text-left rounded-lg py-2 pl-6 pr-3 text-sm font-medium tracking-wide text-white hover:text-black hover:bg-white"
            v-for="category in categories"
            :herf="`/category?category=${category}`"
              >
           {{category}}
         </DisclosureButton>
            
          </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <h1 v-if="user" class="profile-circle bg-blue-500 text-white flex items-center justify-center font-bold uppercase">{{ user.user.charAt(0) }}</h1>
            <span v-else><UserCircleIcon  class="h-8 text-white" /></span>
          </div>
          <div class="ml-3"  v-if="user">
            <div class="text-base font-medium text-white">{{user.user}}</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <NuxtLink to="/shoping-cart"> <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" /></NuxtLink>
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <DisclosureButton as="a" 
          v-if="user"
          href="/admin" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Admin
          </DisclosureButton>
          <DisclosureButton as="a" 
          v-if="!user"
          href="/log-in" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Log in
          </DisclosureButton>
          <DisclosureButton
          v-else
          as="a" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          @click="logout"
          >Log out
        </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
 
  <script setup lang="ts">

  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { BellIcon, Bars3Icon, XMarkIcon, ShoppingCartIcon , UserCircleIcon,ChevronDownIcon} from '@heroicons/vue/24/outline'
  const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Add Product', href: '/'},
    {name: 'Category', href: '/category'},
    {name: 'Shopping Cart', href: '/shoping-cart'},
  ]
  
  const categories = [
    "electronics",
    "jewelery", 
    "men's clothing",
    "women's clothing"
  ]
  const isCatergoryMenu = ref(false)
 const userProduct =  useProductStore();
 const cartStore =  useCartStore();
 const {cart} = storeToRefs(cartStore)
 const  {searchTerm} = storeToRefs(userProduct)
const searchInput = ref('');
   const open = ref(false)
const isUserMenuOpen = ref(false)
const userStore = useUserStore();
const {token} = storeToRefs(userStore)
const {onFailure, onSuccess} = useShowSnackbar()

const cartCount = computed(() => cartStore.getCartItems)

const updateSearchTerm = (event) => {
  searchTerm.value = event.target.value;
};

const user = computed(() => {
  if (token.value) {
    const userData = decodedUserData() ;
    return  userData// Assuming user data is stored as JSON string
  }
  return null
})

const logout = () => {
  localStorage.removeItem('token');
  token.value = ''
  onSuccess('User Log out!');
  navigateTo('/')
}

  </script>
  <style scoped>
.profile-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;               
    height: 25px;
    border-radius: 50%;       
    background-color: #4A90E2;
    color: white;            
    font-size: 20px;          
    font-weight: bold;
    text-transform: uppercase; 
}
</style>