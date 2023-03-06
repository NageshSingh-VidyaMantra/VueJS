<script setup>
import { ref, computed } from "vue";

let timeRef = ref(null);
console.log(timeRef);
/*
setInterval(() => {
  timeRef.value = new Date().toLocaleTimeString();
}, 1000);
*/

const t = computed(() => {
  console.log("getter-Function");
  return (timeRef.value = new Date().toLocaleTimeString());
});
</script>
<template>
  <h1 class="my-5 text-black text-6xl">{{ t }}</h1>
  <!-- <p class="my-5 text-black text-4xl">{{ timeRef }}</p> -->
  <h1 class="my-5 text-lime-400 text-6xl">Computed Property</h1>
  <em>
    <p class="my-5 text-white text-lg">It is like useMemo from ReactJs</p>
    <p class="my-5 text-white text-lg">
      Save the result of time or computation programm
    </p>
    <p class="my-5 text-white text-lg">
      The saved result is updated only if, prop used in that function is
      reactive and updated.
    </p>
    <p class="my-5 text-white text-lg">
      Automatically keep track of reactive variables.
    </p>
  </em>
  <hr />
  <em>
    <p class="my-5 text-white text-lg">
      Computed property are by default getter-only(read only)
    </p>
    <p class="my-5 text-white text-lg">
      If you attemp to assign a new value to a computed property, you will
      rceive a runtime warning.
    </p>
    <p class="my-5 text-white text-lg">
      If it is desired a "writeable" computed property, you can create one by
      providing both a getter and a setter
    </p>
  </em>
  <hr />
  <p class="my-5 text-white text-lg">
    <!-- Print data from time consuming function : {{ expensiveFunction() }} -->
  </p>
</template>
 