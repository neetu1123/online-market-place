<template>
    <div
    >
      <ProductsCardDetails />
    </div>
</template>
<script setup lang="ts">
import ProductsCard from "../components/Products/Card.vue"
import { useProductStore } from "@/stores/useProductStore";
const route = useRoute();
const {id} = route.params

const productStore = useProductStore()
onMounted(async() => {
    console.log(route.params, id)
 await productStore.fetchProductDetails(id)
})
</script>