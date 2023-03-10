<script setup>
import fakerFullName from "./fakerFullName.vue";
import fakerFullNameByComposable from "./fakerFullNameByComposable.vue";
</script>

<template>
  <h1 class="text-emerald-300 text-4xl font-bold text-center my-8">
    Composable
  </h1>
  <div class="my-5 text-lg text-center">
    <p class="pr-5 text-emerald-300">** Similar to custom Hook.</p>
    <p class="pr-5 text-emerald-300">** Well at the end it just a helper function -__-</p>
  </div>
  <hr />

  <p class="my-5 text-lg font-bold">
    <span class="pr-3 text-emerald-300">[]</span> A "Composable" is a function
    that leverages Vue's component API to encapsulate and reuse stateful logic.
  </p>

  <p class="my-5 text-lg font-bold">
    <span class="pr-3 text-emerald-300">[]</span> If we want to reuse the same
    loic in multiple components then we can extract the logic into an external
    file, as a composable function.
  </p>

  <p class="my-5 text-lg font-bold">
    <span class="pr-3 text-emerald-300">[]</span>It is convention to name
    composable functions with camelCase names that start with "use".
  </p>

  <fakerFullName />
  <fakerFullNameByComposable />
</template>
