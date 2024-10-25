<template>
    <div class="container mx-auto my-12">
        <div class="text-center">
            <h4 class="pt-3 text-xl font-semibold">Add New Product</h4>
        </div>
        <div class="flex justify-center">
            <div class="w-full max-w-md">
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Category</label>
                        <select class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                v-model="newProduct.category" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" 
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="newProduct.title" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Description</label>
                        <input type="text"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="newProduct.description" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="newProduct.image" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Price</label>
                        <input type="number"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="newProduct.price" />
                    </div>

                    <button type="button"
                            class="mt-3 w-full bg-indigo-600 text-white font-medium py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            @click="addProduct">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const newProduct = ref({
    title: "",
    price: '',
    description: '',
    image: '',
    category: ''
})

const categories = [
    { id: 1, categoryName: "neetu" }
]

function addProduct(product) {
   const response = fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(product)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            console.log(response)
}
</script>
