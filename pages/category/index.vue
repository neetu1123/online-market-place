<template>
   <div>
    <!-- Display Filtered Items -->
     <CategoriesCard :category-element="categoryData" :category="category" />
    <div>
     <CategoriesCollection />
   </div>
  </div>
</template>
<script setup lang="ts">
import type { ProductDetail } from '~/types/products';

const route = useRoute();
const categoryData = ref<ProductDetail[]>([]);
const category = ref();

/**
 * Function for fetch product item by category
 */
function fetchCategory(category: string)
{
  const SPECIFIC_CATEGORY_API = `https://fakestoreapi.com/products/category/${category}`
   const response = fetch(SPECIFIC_CATEGORY_API)
            .then(res=>res.json())
            .then(json=> categoryData.value = json).catch(err => err);
            return response
}

watch(route , () => {
  category.value =route.query.category;
  fetchCategory(category.value)
},{immediate:true})
</script>