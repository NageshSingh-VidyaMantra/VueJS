<script setup>
import { storeToRefs } from 'pinia'
import { myStoreB } from "../store/storeB";
const myStoreData = myStoreB();
const { increment } = myStoreData;
const { count, double } = storeToRefs(myStoreData);
</script>

<template>
  <div class="bg-[#222] p-5 shadow-md shadow-[#111] rounded-lg my-10">
    <p class="rounded-lg text-xl">
      Hello I am Child <span class="text-yellow-400">B</span>
    </p>
    <div class="flex justify-evenly items-center my-5">
      <p class="rounded-lg text-xl">Count : {{ count }}</p>
      <p class="rounded-lg text-xl">Double : {{ double }}</p>
      <button 
      @click="increment"
      class="text-yellow-400 bg-[#333] active:scale-90 shadow-lg shadow-black transition-all rounded-lg text-xl border-yellow-400 p-3 border-2">
        + + Increment
      </button>
    </div>
  </div>
</template>