<template>
    <div class="lg:grid lg:grid-cols-12 sm:my-20 my-12">
    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
      <form class="sm:flex justify-center items-center" @submit.prevent>
        <div class="shadow-md sm:px-3 sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div class="py-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ isEditMode ? 'Edit' : 'Add' }} Personal Information
              </h3>
              <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input id="first-name" v-model="user.name.firstname" type="text" name="first-name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input id="last-name" v-model="user.name.lastname" type="text"  name="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input id="email-address" v-model="user.email" type="text" name="email-address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">User name</label>
                  <input id="first-name" v-model="user.username" type="text" name="first-name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Password</label>
                  <input id="last-name" v-model="user.password" type="text" name="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
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
                  <input id="street-address" v-model="user.address.street" type="text" name="street-address" autocomplete="street-address" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input id="city" v-model="user.address.city" type="text" name="city" autocomplete="address-level2" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                  <input id="postal-code" v-model="user.address.zipcode" type="text" name="postal-code" autocomplete="postal-code" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="region" class="block text-sm font-medium text-gray-700">Phone No.</label>
                  <input id="region" v-model="user.phone" type="text" name="region" autocomplete="address-level1" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                </div>
              </div>
            </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="handleUserSubmit"
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
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchAPI } from '~/composables/useFetchAPI';
  import type { User } from '~/types/users';
  
  const route = useRoute();
  const isEditMode = ref(false);
  const userId = route.params.id || null;
  const user = ref<User>({
    email: '',
    username: '',
    password: '',
    name: { firstname: '', lastname: '' },
    address: { city: '', street: '', number: 0, zipcode: '', geolocation: { lat: '', long: '' }},
    phone: ''
  });
  
  onMounted(async () => {
    if (route.path.includes('edit') && userId) {
      isEditMode.value = true;
      await fetchUserData(userId as string);
    }
  });
  
  async function fetchUserData(id: string) {
    try {
      const response = await fetchAPI(`https://fakestoreapi.com/users/${id}`, 'GET');
      user.value = response;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  async function handleUserSubmit() {
    const { onFailure, onSuccess } = useShowSnackbar();
    const body = {
        ...(user.value.email && {email: user.value.email}),
        ...(user.value.username && {username: user.value.username}),
        ...(user.value.name.firstname && {firstname:user.value.name.firstname}),
        ...(user.value.name.lastname && { lastname: user.value.name.lastname}),
        ...(user.value.address.city && {city: user.value.address.city}),
        ...(user.value.address.street && {street: user.value.address.street}),
        ...(user.value.address.number && {number: user.value.address.number}),
        ...(user.value.address.zipcode && {zipcode: user.value.address.zipcode}),
        ...(user.value.address.geolocation?.lat && {lat: user.value.address.geolocation.lat}),
        ...(user.value.address.geolocation?.long && {long: user.value.address.geolocation.long}),
        ...(user.value.phone && {phone: user.value.phone}),
         }
  
    try {
      const url = isEditMode.value
        ? `https://fakestoreapi.com/users/${userId}`
        : `https://fakestoreapi.com/users`;
      const method = isEditMode.value ? 'PUT' : 'POST';
      await fetchAPI(url, method, body);
  
      onSuccess(isEditMode.value ? 'User updated successfully' : 'User added successfully');
    } catch (error) {
      onFailure('Please enter all values');
      throw error;
    }
  }
  </script>