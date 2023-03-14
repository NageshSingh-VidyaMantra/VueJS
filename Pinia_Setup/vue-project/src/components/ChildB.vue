<script setup>
import { storeToRefs } from 'pinia'
import myStoreB from "../store/storeB";
const myStoreData = myStoreB();

const { funInB } = myStoreData;
const { countB, DAAddB } = storeToRefs(myStoreData);
</script>

<template>
  <div class="bg-[#222] p-5 shadow-md shadow-[#111] rounded-lg my-10">
    <p class="rounded-lg text-xl">
    --&gt; Hello I am Child <span class="text-yellow-400">B</span> , and I am using <span class="text-yellow-400">storeA inside my store 'storeB'.</span>
    </p>

    <p class="rounded-lg text-xl">
      --&gt; Although I am NOT mutating value of A, <span class="text-yellow-400"> BUT I can mutate state of state A, However that can lead to UNEXPECTED errors</span>, So avoid it.
    </p>
    <div class="flex flex-col space-y-5 justify-evenly items-center my-5">
      <p class="rounded-lg text-xl">Count B : {{ countB }}</p>
      <p class="rounded-lg text-xl">Double A & add count B : {{ DAAddB }}</p>
      <button 
      @click="funInB"
      class="text-yellow-400 bg-[#333] active:scale-90 shadow-lg shadow-black transition-all rounded-lg text-xl border-yellow-400 p-3 border-2">
       Mutate B
      </button>
    </div>
  </div>
</template>