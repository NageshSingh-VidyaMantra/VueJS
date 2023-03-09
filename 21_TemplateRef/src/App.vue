<script setup>
import ChildA from "./childComponentA.vue";
import ChildB from "./childComponentB.vue";
</script>

<template>
  <h1 class="text-pink-400 text-4xl font-bold text-center my-8">Template Ref</h1>
  <p class="my-5 text-lg font-bold text-center"><span class="pr-5 text-pink-200">**smililar to useRef()</span></p>
  <hr>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> Ref is used to register a refrence to an element or a child component.</p>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> It allow us to obtain a direct reference to a specific DOM element or child component instance after it is mounted.</p>
</template>
