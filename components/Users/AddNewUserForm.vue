<template>
    <div class="lg:grid lg:grid-cols-12 sm:my-20 my-12">
      <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
        <form @submit.prevent class="sm:flex justify-center items-center">
          <div class="shadow-md sm:px-3 sm:rounded-md sm:overflow-hidden">
            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
              <div class="py-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
              </div>
  
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" id="first-name" v-model="user.name.firstname" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" id="last-name"  v-model="user.name.lastname" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" v-model="user.email" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">User name</label>
                  <input type="text" name="first-name" id="first-name" v-model="user.username" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="text" name="last-name" id="last-name" v-model="user.password" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
  
                <div class="col-span-6">
                  <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" v-model="user.address.street" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" autocomplete="address-level2" v-model="user.address.city" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" v-model="user.address.zipcode" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="region" class="block text-sm font-medium text-gray-700">Phone No.</label>
                  <input type="text" name="region" id="region" autocomplete="address-level1" v-model="user.phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="AddNewUser"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { fetchAPI } from '~/composables/useFetchAPI';

  
  const user = ref({
    email: '',
    username: '',
    password: '',
    name: {
        firstname: '',
        lastname: ''
    },
    address: {
        city: '',
        street: '',
        number: 0,
        zipcode: '',
        geolocation: {
            lat: '',
            long: ''
        }
    },
    phone: ''
});

async function AddNewUser() {
    const {onFailure, onSuccess} = useShowSnackbar()
    try{
        const response = await fetchAPI('https://fakestoreapi.com/users', 'POST', user);
       onSuccess('Successfully Added New User')
    }
  catch(error) {
    onFailure('Please enter all value');
    throw error;
  }
}

 
  </script>