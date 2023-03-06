<script setup>
import { ref } from "vue";
const count = ref(0);
setInterval(() => {
  console.log(count.value);
  return ++count.value;
}, 1000);
</script>
<template>
  <h1>Count : {{ count }}</h1>
</template>
