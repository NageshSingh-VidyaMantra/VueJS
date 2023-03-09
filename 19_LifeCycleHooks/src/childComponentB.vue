<script setup>
import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
 } from "vue";

onBeforeMount(()=>{
  console.log('onBeforeMount - ChildB')
})

onMounted(()=>{
  console.log('onMounted - ChildB')
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate - ChildB')
})

onUpdated(()=>{
  console.log('onUpdated - ChildB')
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount - ChildB')
})

onUnmounted(()=>{
  console.log('onUnmounted - ChildB')
})
</script>
<template>
    <h1 class="my-5 text-2xl"> &lt; Hello I am ChildB &gt;</h1>
</template>