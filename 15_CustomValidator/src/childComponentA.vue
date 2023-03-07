<script setup>
defineProps({
  name: {
    type: String,
    validator: (propVal) => {
      return ["Anna", "Stu", "Nina"].includes(propVal);
    },
  },
  age: {
    type: Number,
    validator: (propVal) => {
      return propVal < 35 ? true : false;
    },
  },
  
});
</script>

<template>
  <div
    class="w-[500px] my-5 bg-[#111] p-5 font-bold text-xl rounded-lg shadow-sm shadow-lime-400 space-x-10"
  >
      <span> {{ name }} </span>
      <span> {{ age }} </span>
      <hr class="my-10">
      <p class="text-sm my-5">**Although output is printed but we are getting warning from Custom Validators</p>
  </div>
</template>
