<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 class="text-2xl font-bold mb-6">Log In</h1>
        <p class="mb-4">Please fill in this form to create an account.</p>
  
        <div v-if="formError" class="text-red-500 mb-4">{{ formError }}</div>
  
        <div class="mb-4">
          <label for="email" class="block mb-2 font-bold">Email</label>
          <input 
            type="text" 
            id="email" 
            v-model="formData.username" 
            placeholder="Enter Email"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>
  
        <div class="mb-4">
          <label for="password" class="block mb-2 font-bold">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="formData.password" 
            placeholder="Enter Password"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
        </div>
  
        <div class="mb-4">
          <label for="passwordRepeat" class="block mb-2 font-bold">Repeat Password</label>
          <input 
            type="password" 
            id="passwordRepeat" 
            v-model="formData.passwordRepeat" 
            placeholder="Repeat Password"
            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span v-if="passwordRepeatError" class="text-red-500 text-sm">{{ passwordRepeatError }}</span>
        </div>
  
        <div class="mb-4">
          <label class="flex items-center">
            <input type="checkbox" v-model="formData.rememberMe" class="mr-2">
            Remember me
          </label>
        </div>
  
        <p class="text-sm mb-6">
          By creating an account, you agree to our
          <a href="#" class="text-blue-500">Terms & Privacy</a>.
        </p>
  
        <div class="flex justify-between">
          <button type="button" @click="cancelForm" class="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600">
            Cancel
          </button>
          <button type="submit" class="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </template>
  <script setup lang="ts"> 
 const userStore = useUserStore()
      const formData = ref ({
          username: '',
          password: '',
        })
        const formError = ref('')
       const emailError = ref('')
       const passwordError = ref('')
       const passwordRepeatError = ref('')

     function validateForm() {
        // Reset errors
       emailError.value =passwordError.value = passwordRepeatError.value = formError.value = '';
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.value.email)) {
          emailError.value = 'Please enter a valid email.';
        }
  
        // Password validation
        if (formData.value.password.length < 6) {
          passwordError.value = 'Password must be at least 6 characters long.';
        }
  
        // Repeat password validation
        if (formData.value.password !== formData.value.passwordRepeat) {
          passwordRepeatError.value = 'Passwords do not match.';
        }
  
        // Return true if there are no errors
        return !emailError && !passwordError.value && !passwordRepeatError;
      }
    async function submitForm() {
        console.log(formData.value);
       await authentication(formData.value)
      }
     function cancelForm() {
        // Reset form
        formData.value.email = '';
        formData.value.password = '';
        formData.value.passwordRepeat = '';
        formData.value.rememberMe = false;
        formError.value = '';
      }
      </script>
  
  <style scoped>
  /* Responsive layout handled by TailwindCSS */
  </style>
  