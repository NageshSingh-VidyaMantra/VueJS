<script setup>
const props = defineProps(["inputType", "labelData", "placeHolder"]);
console.log(props);
</script>
<template>
  <hr class="my-10 text-white w-full" />
  <p class="mt-10 mb-5 text-3xl text-sky-400 font-bold">CHILD 3</p>
  <div
    class="bg-[#111] my-10 p-5 rounded-lg space-x-10 shadow-sm shadow-sky-400"
  >
    <label>{{ labelData }}</label>
    <input :type="inputType" :placeholder="placeHolder" class="pl-3" />
  </div>
</template>
