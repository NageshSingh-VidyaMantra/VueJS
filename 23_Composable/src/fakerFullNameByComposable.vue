<script setup>
import { ref } from "vue";
import { useFakerFullName } from "./composable/UseFakerFullName.js";

const fName = ref('Ramona');
const lName = ref('Reichert');

function displayName() {
  const { firstName, lastName } = useFakerFullName();
  fName.value = firstName.value;
  lName.value = lastName.value;
}


</script>

<template>
  <div
  @mouseover="displayName"
    class="my-10 p-5 rounded-lg bg-[#222] text-center text-xl border-2 border-emerald-300 shadow-lg shadow-[#111]"
  >
    <p class="my-5">As the mouse moved over me, new name will rendered.</p>
    <p class="my-5">{{ fName }} {{ lName }}</p>
    <p class="my-5">Rendered through composable.</p>
  </div>
</template>
