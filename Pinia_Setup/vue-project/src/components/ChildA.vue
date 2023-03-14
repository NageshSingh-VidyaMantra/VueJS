<script setup>
import { storeToRefs } from 'pinia'
import myStoreA from "../store/storeA";
const myStoreData = myStoreA();

const { increment } = myStoreData;

// `count` and `double` are refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { count, double } = storeToRefs(myStoreData);

</script>

<template>
  <div class="bg-[#222] p-5 shadow-md shadow-[#111] rounded-lg my-10">
    <p class="rounded-lg text-xl">
      Hello I am Child <span class="text-yellow-400">A</span>
    </p>
    <div class="flex flex-col space-y-5 justify-evenly items-center my-5">
      <p class="rounded-lg text-xl">Count : {{ count }}</p>
      <p class="rounded-lg text-xl">Double : {{ double }}</p>
      <button 
      @click="increment"
      class="text-yellow-400 bg-[#333] active:scale-90 shadow-lg shadow-black transition-all rounded-lg text-xl border-yellow-400 p-3 border-2">
        Mutate A
      </button>
    </div>
  </div>
</template>
