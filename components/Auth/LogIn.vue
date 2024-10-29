<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg" @submit.prevent="submitForm">
        <h1 class="text-2xl font-bold mb-6">Log In</h1>
        <p class="mb-4">Please fill in this form to log in an account.</p>
  
        <div v-if="formError" class="text-red-500 mb-4">{{ formError }}</div>
  
        <div class="mb-4">
          <label for="email" class="block mb-2 font-bold">Username</label>
          <input 
            id="email" 
            v-model="formData.username" 
            type="text" 
            placeholder="Enter Email"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          <span v-if="usernameError" class="text-red-500 text-sm">{{ usernameError }}</span>
        </div>
  
        <div class="mb-4">
          <label for="password" class="block mb-2 font-bold">Password</label>
          <input 
            id="password" 
            v-model="formData.password" 
            type="password" 
            placeholder="Enter Password"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
        </div>
        <p class="text-sm mb-6">
          By creating an account, you agree to our
          <a href="#" class="text-blue-500">Terms & Privacy</a>.
        </p>
  
        <div class="flex justify-between">
          <button type="button" class="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600" @click="cancelForm">
            Cancel
          </button>
          <button type="submit" class="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
            Log In
          </button>
        </div>
      </form>
    </div>
  </template>
  <script setup lang = "ts" >
  import type {FormData} from "@/types/users"
const userStore = useUserStore();

const formData = ref<FormData>({
  username: '',
  password: '',
})
const formError = ref('')
const usernameError = ref('')
const passwordError = ref('')

function validateForm() {
  // Reset errors
  usernameError.value = passwordError.value = formError.value = '';
  if (!formData.value.username)
    usernameError.value = 'Kindly fill the username'
  if (!formData.value.password)
    usernameError.value = 'Kindly fill the password'
  // Return true if there are no errors
  return !usernameError.value && !passwordError.value;
}
/**
 * Function to submit login form
 */
async function submitForm() {
  const {
    onFailure, onSuccess
  } = useShowSnackbar()
  const isError = validateForm();
  if (!isError) {
    onFailure('Please log in with correct username or password !')
    return
  }
  const userAuth = await userStore.authentication(formData.value)
  if (userAuth) {
    onSuccess('Logged in successfully!')
    return navigateTo('/')
  } else
    onFailure('Please log in with correct username or password !')
}
/**
 * Function to cancel the fill field
 */
function cancelForm() {
  // Reset form
  formData.value.username = '';
  formData.value.password = '';
  formError.value = '';
} 
</script>