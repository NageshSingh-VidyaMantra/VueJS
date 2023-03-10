<script setup>
import {watchEffect} from 'vue'
const {empName, empAge, empInfo, empAddress} = defineProps(['empName', 'empAge', 'empInfo', 'empAddress'])

watchEffect(()=>{
    console.log(empName)
    console.log(empAge)
    console.log(empInfo)
    console.log(empAddress)
})
</script>
<template>
  <p class="my-5 text-2xl">
    <span class="pr-3 text-emerald-300">[]</span> I am Child B Component
  </p>
  <div class="w-[625px] bg-[#222] p-5 text-xl border-2 border-emerald-300 rounded-lg px-10">
    <p class="flex justify-between my-2"><span>String</span> <span>{{ empName }} </span></p>
    <p class="flex justify-between my-2"><span>Number</span> <span>{{ empAge }} </span></p>
    <p class="flex justify-between my-2"><span>Array </span> <span>{{ empInfo[0] }} , {{ empInfo[1] }} , {{ empInfo[2] }}  </span></p>
    <p class="flex justify-between my-2"><span>Object</span> <span>{{ empAddress.sec }}, {{ empAddress.city }}, {{ empAddress.country }} </span></p>
  </div>
</template>
