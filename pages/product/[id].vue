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

const productStore = useProductStore();
onMounted(async() => {
 await productStore.fetchProductDetails(id as string)
})

onBeforeMount(() => {
   productStore.setStoreEmpty()

})

</script>