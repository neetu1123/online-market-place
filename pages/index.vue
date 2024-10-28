<template>
<div>
   
    <ProductsCard />
</div>
</template>
<script setup lang="ts">
import ProductsCard from "../components/Products/Card.vue"
import { useProductStore } from "@/stores/useProductStore";

const productStore = useProductStore()
onMounted(async() => {
 await productStore.fetchProductList()
})


</script>