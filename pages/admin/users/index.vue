<template>
  <div class="px-4 sm:px-6 my-12 lg:my-20 mx-2 lg:px-8 lg:mx-32">
  
    <div v-if="userList.length" class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, username, email and phone no.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          
         <button  class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
        <NuxtLink to="/admin/users/add-new"> Add user</NuxtLink>
       </button>
       
      </div>
    </div>
    <div v-if="!userList.length" class="flex flex-col items-center justify-center h-[50vh]">
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
    <div v-else class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Username</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Email</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Phone No.</th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="person in userList" :key="person.email">
            <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
              {{`${ person.name.firstname } ${person.name.lastname}`}}
              <dl class="font-normal lg:hidden">
                <dt class="sr-only">Title</dt>
                <dd class="mt-1 truncate text-gray-700">{{ person.username }}</dd>
                <dt class="sr-only sm:hidden">Email</dt>
                <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ person.email }}</dd>
                <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ person.phone }}</dd>
              </dl>
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ person.username }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ person.email }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ person.phone }}</td>
            <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <NuxtLink :to='`/admin/users/edit/${person.id}`' class="text-indigo-600 hover:text-indigo-900"
                >Edit<span class="sr-only">, {{ person.name }}</span></NuxtLink
              >
            </td>
            <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <button
              class="text-red-400 hover:text-red-600"
              @click="deleteUser(person.id)"
                >Delete<span class="sr-only">, {{ person.name }}</span></button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { fetchAPI } from '~/composables/useFetchAPI';
import type { UserList } from '~/types/users';


const userList = ref<UserList[]>([])
const {onFailure, onSuccess} = useShowSnackbar();

/**
 * Function for fetch users list
 */
async function fetchUserList() {
const USER_API = `https://fakestoreapi.com/users`
  try{
    const response = await fetchAPI(USER_API);
    userList.value = response
    }
  catch(error) {
    onFailure('Unable to fetch users list!');
    throw error;
  }
}
/**
 * Function for delete user item list
 * @param userId 
 */
function deleteUser(userId: string) {
  userList.value = userList.value.filter(user => user.id !== userId);
  onSuccess('Successfully deleted ')
}

onMounted(async() => {
   await fetchUserList()
})
</script>