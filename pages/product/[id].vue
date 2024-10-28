<template>
    <div
    >
      <ProductsCardDetails />
    </div>
</template>
<script setup lang="ts">
import { useProductStore } from "@/stores/useProductStore";
const route = useRoute();
const {id} = route.params

const productStore = useProductStore()
onMounted(async() => {
    // console.log(route.params, id)
 await productStore.fetchProductDetails(id)
})

onBeforeMount(() => {
   productStore.setStoreEmpty()

})

</script>