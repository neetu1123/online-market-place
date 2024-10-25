<template>
    <div class="container mx-auto">
        <div class="text-center">
            <h4 class="pt-3 text-xl font-semibold">Edit Product</h4>
        </div>
        <div class="flex justify-center">
            <div class="w-full max-w-md">
                <form v-if="product" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Category</label>
                        <select class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                v-model="product.category" required>
                            <option v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"> 
                                {{category.categoryName}}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" 
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="product.title" required/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Description</label>
                        <input type="text"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="product.description" required/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="product.image" required/>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Price</label>
                        <input type="number"
                               class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                               v-model="product.price" required/>
                    </div>

                    <button type="button"
                            class="mt-3 w-full bg-indigo-600 text-white font-medium py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            @click="editProduct">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const product = ref({
    title: "",
    price: '',
    description: '',
    image: '',
    category: ''
})
const id = ref(null)
const categories = [
    { id: 1, categoryName: "Mens" },
    { id: 2, categoryName: "Women" },
    { id: 3, categoryName: "Jewelry" },
    { id: 4, categoryName: "Electronic" },
]
function editProduct(product, productId) {
   const response = fetch(`https://fakestoreapi.com/products/2`,{
            method:"PUT",
            body:JSON.stringify(
                product
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json));
            console.log(response)
}
</script>
