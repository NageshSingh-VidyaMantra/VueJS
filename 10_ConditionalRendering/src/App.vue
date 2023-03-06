<script setup>
import { ref } from "vue";
const count = ref(0);
const isEven = ref(true);
setInterval(() => {
  ++count.value;
  if (count.value % 2 === 0) isEven.value = true;
  else isEven.value = false;
}, 1000);
</script>
<template>
  <h1 class="text-4xl my-5 text-lime-400">
    v-if, v-else-if, v-else and v-show
  </h1>
  <h1 class="my-10 text-2xl" :class="[isEven ? 'text-black' : 'text-blue-500']">
    Count : {{ count }}
  </h1>
  <div class="my-10 text-lg">
    <h1 v-if="count === 0">count === 0</h1>
    <h1 v-else-if="count > 1 && count <= 10">count > 1</h1>
    <h1 v-else-if="count > 10 && count <= 20">count > 10</h1>
    <h1 v-else-if="count > 20 && count <= 30">count > 20</h1>
    <h1 v-else-if="count > 30 && count <= 40">count > 30</h1>
    <h1 v-else-if="count > 40 && count <= 50">count > 40</h1>
    <h1 v-else>count > 50</h1>
  </div>

  <div class="my-10 text-lg">
    <h1 v-if="count === 0">count === 0</h1>
    <h1 v-if="count > 1">count > 1</h1>
    <h1 v-if="count > 10">count > 10</h1>
    <h1 v-if="count > 20">count > 20</h1>
    <h1 v-if="count > 30">count > 30</h1>
    <h1 v-if="count > 40">count > 40</h1>
    <h1 v-if="count > 50">count > 50</h1>
  </div>

  <template v-if="true">
    <h1>This is Nested Template 1</h1>
  </template>

  <template v-if="false">
    <h1>This is Nested Template 2</h1>
  </template>

  <div v-if="true">
    <h1>This is Div 1</h1>
  </div>

  <div v-if="false">
    <h1>This is Div 2</h1>
  </div>

  <hr class="my-5" />
  <h1 class="text-4xl my-5 text-lime-400">v-show</h1>
  <p class="my-5 text-xl">
    It only change the display property to none, if codn is true
  </p>
  <p class="my-5 text-lg" v-show="true">I am show p1</p>
  <p class="my-5 text-lg" v-show="false">I am show p2</p>
  <p class="my-5 text-lg" v-show="true">
    I am show p3,&nbsp; p2 display is
    <span class="text-xl font-bold my-5 text-lime-400">NONE</span>
  </p>
</template>
