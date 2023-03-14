<script setup>
import myStoreC from "../store/storeC";
const myStoreData = myStoreC();

const { mutateB } = myStoreData
</script>

<template>
  <div class="bg-[#222] p-5 shadow-md shadow-[#111] rounded-lg my-10">
    <p class="rounded-lg text-xl">
    --&gt; Hello I am Child <span class="text-yellow-400">C</span> , and I am <span class="text-yellow-400">mutating count B.
    </span>
    </p>
    <p class="rounded-lg text-xl">
    --&gt; I acheived that by <span class="text-yellow-400">calling storeB inside my store 'storeA'.</span>
    </p>

    <p class="rounded-lg text-xl">
    --&gt; In order to mutate state of<span class="text-yellow-400"> Count B, I created a function and give it's access to you.</span>
    </p>
    <p class="rounded-lg text-xl">
    --&gt; Each time you click on Button, <span class="text-yellow-400">Count B id decreaing by 5, see above.</span>
    </p>
    <p class="text-lime-400 rounded-lg text-xl ">--&gt; In a nutsheel the safest way to mutate count of B is by creating a function and use it to mutate it.</p>
    <div class="flex flex-col space-y-5 justify-evenly items-center my-5">
      <button 
      @click="mutateB"
      class="mt-5 text-yellow-400 bg-[#333] active:scale-90 shadow-lg shadow-black transition-all rounded-lg text-xl border-yellow-400 p-3 border-2">
       Count B -= 5
      </button>
    </div>
    <p class="text-yellow-600 rounded-lg text-xl ">--&gt; If two or more stores use each other, they cannot create an infinite loop through getters or actions. They cannot both directly read each other state in their setup function.</p>
  </div>
</template>