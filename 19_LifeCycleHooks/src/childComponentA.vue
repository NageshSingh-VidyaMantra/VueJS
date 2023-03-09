<script setup>
import ChildB from "./childComponentB.vue";

import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref
 } from "vue";

onBeforeMount(()=>{
  console.log('onBeforeMount - ChildA')
})

onMounted(()=>{
  console.log('onMounted - ChildA')
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate - ChildA')
})

onUpdated(()=>{
  console.log('onUpdated - ChildA')
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount - ChildA')
})

onUnmounted(()=>{
  console.log('onUnmounted - ChildA')
})
</script>
<template>
    <h1 class="my-5 text-2xl"> &lt; Hello I am ChildA &gt;</h1>
    <ChildB/>
</template>