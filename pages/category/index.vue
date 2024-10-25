<template>
    <div>

<!-- Display Filtered Items -->
<div>
  <h2>Items in {{ selectedCategory }}</h2>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</div>
</div>
</template>
<script setup lang="ts">


function fetchCategory()
{
   const response = fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json));
            console.log({response})
            return response
}
onMounted(() => {
    fetchCategory()
})
</script>