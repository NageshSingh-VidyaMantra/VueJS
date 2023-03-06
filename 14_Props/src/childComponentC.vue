<script setup>
import {toRefs} from 'vue'
const props = defineProps({
  empRec: Object,
  otherInf: Array,
  age: Number,
});
console.log(props)
let {empId, empName} = toRefs(props.empRec);
</script>

<template>
  <div
    class="my-5 bg-[#111] p-5 font-bold text-xl rounded-lg shadow-sm shadow-lime-400 space-x-10"
  >
    <span v-for="inf in otherInf">{{ inf }}</span>
  </div>

  <div
    class="my-5 bg-[#111] p-5 font-bold text-xl rounded-lg shadow-sm shadow-lime-400 space-x-10"
  >
    <span >{{ empId }}</span>
    <span >{{ empName }}</span>
    <span >{{ age }}</span>
  </div>
</template>
