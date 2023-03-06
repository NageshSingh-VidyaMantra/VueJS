<script setup>
const petName = 'Scobby'
</script>

<template>
  <h1 class="underline">I am Child Component - {{ petName }}</h1>
</template>

<style scoped>
.underline{
   text-decoration: underline; 
}
</style>
