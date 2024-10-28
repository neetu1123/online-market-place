<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 class="text-2xl font-bold mb-6">Log In</h1>
        <p class="mb-4">Please fill in this form to log in an account.</p>
  
        <div v-if="formError" class="text-red-500 mb-4">{{ formError }}</div>
  
        <div class="mb-4">
          <label for="email" class="block mb-2 font-bold">Username</label>
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
            Log In
          </button>
        </div>
      </form>
    </div>
    <GenericDialogBox :open="isLoginSuccess"
    >
      <div class="text-left  transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div class="block absolute top-0 right-0 sm:pt-4 sm:pr-4">
                <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="isLoginSuccess = false">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
               
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div  class="text-xl leading-6 font-medium text-gray-900">
                   Log in successfully !
                  </div>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Login successful! You’re all set to manage your account, check notifications, or continue shopping. Let us know if there’s anything you need!
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </GenericDialogBox>
  </template>
  <script setup lang="ts"> 
  import {XMarkIcon} from '@heroicons/vue/24/solid'
 const userStore = useUserStore()
      const formData = ref ({
          username: '',
          password: '',
        })
        const formError = ref('')
       const emailError = ref('')
       const passwordError = ref('')
   const isLoginSuccess = ref(false);

     function validateForm() {
        // Reset errors
       emailError.value =passwordError.value = formError.value = '';
       if(!formData.value.username) 
       emailError.value = 'Kindly fill the username'
       if(!formData.value.password) 
       emailError.value = 'Kindly fill the password'
        // Return true if there are no errors
        return !emailError.value && !passwordError.value;
      }
    async function submitForm() {
        console.log(formData.value);
        const {onFailure} = useShowSnackbar()
       const isError =  validateForm();
       console.log(isError)
       if(!isError) {
         onFailure('Please log in with correct username or password !')
         return
       }

      const userAuth =  await userStore.authentication(formData.value)
      if(userAuth)  {
        
        isLoginSuccess.value = true;
      }
    else 
     onFailure('Please log in with correct username or password !')
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
  