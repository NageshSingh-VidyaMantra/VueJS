<script setup>
import {ref, reactive} from 'vue'

import ChildA from './ChildComponentA.vue'

const message 

</script>

<template>
  <h1 class="text-emerald-300 text-4xl font-bold text-center my-8">
    Question
  </h1>

  <p class="my-5 text-2xl">
    <span class="pr-3 text-emerald-300">[]</span> I am Parent Component
  </p>

  <p class="my-5 text-2xl w-[600px] flex justify-between">
    <span class="pr-3 text-emerald-300">Data change in</span> <span class="text-3xl text-emerald-300 font-bold
    animate animate-ping ">{{ count }}</span>
  </p>

  <div class="w-[625px] bg-[#222] p-5 text-xl border-2 border-emerald-300 rounded-lg px-10">
    <p class="flex justify-between my-2"><span>String</span> <span>{{ empName }} </span></p>
    <p class="flex justify-between my-2"><span>Number</span> <span>{{ empAge }} </span></p>
    <p class="flex justify-between my-2"><span>Array </span> <span>{{ empInfo[0] }} , {{ empInfo[1] }} , {{ empInfo[2] }}  </span></p>
    <p class="flex justify-between my-2"><span>Object</span> <span>{{ empAddress.sec }}, {{ empAddress.city }}, {{ empAddress.country }} </span></p>
  </div>

  <hr class="my-10">
  <ChildA :empName="empName" :empAge="empAge" :empInfo="empInfo" :empAddress="empAddress" />
  <hr class="my-10">
  <ChildB :empName="empName" :empAge="empAge" :empInfo="empInfo" :empAddress="empAddress" />
</template>
