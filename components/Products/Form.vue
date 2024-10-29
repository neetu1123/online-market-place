<template>
    <div class="container mx-auto my-20">
        <div class="text-center">
            <h4 class="py-3 text-xl font-semibold">
                {{ isEditMode ? 'Edit Product' : 'Add New Product' }}
            </h4>
        </div>
        <div class="flex justify-center">
            <div class="w-full max-w-md">
                <form v-if="productDetails || !isEditMode" class="space-y-4" @submit.prevent="handleSubmit">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            v-model="productDetails.category"
                            class="mt-1 block w-full p-2 border capitalize border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                            <option
                                v-for="category of categories"
                                :key="category"
                                :value="category"> 
                                {{ category }}
                            </option>
                        </select>
                        <p v-if="errors.category" class="text-red-500 text-sm">{{ errors.category }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            v-model="productDetails.title" 
                            type="text"
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                        <p v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            v-model="productDetails.description"
                            type="text"
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                        <p v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            v-model="productDetails.image"
                            type="text"
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                        <p v-if="errors.image" class="text-red-500 text-sm">{{ errors.image }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            v-model="productDetails.price"
                            type="number"
                            step="any"
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
                        <p v-if="errors.price" class="text-red-500 text-sm">{{ errors.price }}</p>
                    </div>

                    <button
                        type="submit"
                        class="mt-3 w-full bg-indigo-600 text-white font-medium py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {{ isEditMode ? 'Update Product' : 'Add Product' }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const productStore = useProductStore();
const { productDetails } = storeToRefs(productStore);

const categories = [
    "men's clothing",
    "women's clothing",
    "jewelry",
    "electronics",
];

const route = useRoute();
const id = route.params.id as string;
const isEditMode = ref(route.path.includes('edit'));
type ErrorType = {
  category?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: string;
};
// Error tracking
const errors = ref<ErrorType>({
    category: '',
    title: '',
    description: '',
    image: '',
    price: ''
});

/**
 * Function to validate the form
 */
function validateForm() {
    const errorKeys = ['category', 'title', 'description', 'image', 'price'] as const;

    let isValid = true;
    errorKeys.forEach(key => {
    errors.value[key] = productDetails.value[key] ? '' : `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
  });
  
  isValid = !errorKeys.some(key => errors.value[key]);
  
  return isValid;
}

function handleSubmit() {
    const { onFailure, onSuccess } = useShowSnackbar();
    
    // Validate the form before submission
    if (!validateForm()) {
        return;
    }

    const body = {
        ...(productDetails.value.title && { title: productDetails.value.title }),
        ...(productDetails.value.price && { price: productDetails.value.price }),
        ...(productDetails.value.description && { description: productDetails.value.description }),
        ...(productDetails.value.image && { image: productDetails.value.image }),
        ...(productDetails.value.category && { category: productDetails.value.category })
    };

    const url = isEditMode.value 
        ? `https://fakestoreapi.com/products/${id}`
        : 'https://fakestoreapi.com/products';

    fetch(url, {
        method: isEditMode.value ? "PUT" : "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(() => onSuccess(isEditMode.value ? 'Product updated successfully!' : 'Product added successfully!'))
    .catch(() => onFailure('An error occurred while submitting the form.'));
}

onMounted(async () => {
    if (isEditMode.value) {
        await productStore.fetchProductDetails(id);
    } else {
        // Initialize a blank product object for new products
        productDetails.value = {
            title: '',
            description: '',
            image: '',
            category: '',
            price: 0,
        };
    }
});
</script>
