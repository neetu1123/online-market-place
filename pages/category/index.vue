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
const route = useRoute();
const categoryData = ref([]);
const category = ref()
function fetchCategory(category)
{
   const response = fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> categoryData.value = json);
            console.log({response})
            return response
}

watch(route , () => {
  category.value =route.query.category;
  fetchCategory( category.value)
},{immediate:true})
</script>