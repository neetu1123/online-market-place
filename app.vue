<template>
 <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <GenericDialogBox  v-if=isFirstVisit />
  </div>
</template>
<script setup lang="ts">
const isFirstVisit = ref(false)
 onMounted(()  => {
    if (!localStorage.getItem('visited')) {
      isFirstVisit.value = true;
      localStorage.setItem('visited', 'true'); // Set a flag to remember user's visit
    }
  })
</script>
