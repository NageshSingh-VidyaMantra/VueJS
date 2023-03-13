<script setup>
import ChildA from "./childComponentA.vue";
import { ref } from "vue";

const usernameFromChild = ref('Waiting . . .')
const displayLoading = ref(true)
function usernameHandler(input){
  usernameFromChild.value = input;
  if(input.trim()) displayLoading.value = false;
  else {
    displayLoading.value = true;
    usernameFromChild.value = 'Waiting . . .'
  }
}
</script>

<template>
  <h1 class="text-pink-400 text-4xl font-bold text-center my-8">Template Ref</h1>
  <p class="my-5 text-lg font-bold text-center"><span class="pr-5 text-pink-200">**smililar to useRef()</span></p>
  <hr>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> Ref is used to register a refrence to an element or a child component.</p>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> It allow us to obtain a direct reference to a specific DOM element or child component instance after it is mounted.</p>
  <p class="my-5 text-lg font-bold w-full pr-5 text-pink-300 text-center">Acessing the ref</p>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> The reference is stored in a ref, so we need to declare a ref with the same name.</p>
  <p class="my-5 text-lg font-bold"><span class="pr-5 text-pink-500">[]</span> We can only access input in a template expression, it will be null on the first render. This is because the element doesn't exist until after the first render.</p>
<ChildA @usernameHandler="usernameHandler"/>

<p class="mt-20 font-bold text-pink-400 text-4xl">I am Parent Component</p>
  <div
    class="mb-20 bg-[#222] p-10 flex justify-evenly items-center rounded-lg border-2 border-pink-300"
  >
    <label class="text-xl text-pink-300 font-bold">Value Received By Child</label>
    <p class="text-2xl capitalize">{{ usernameFromChild }} &nbsp;<span v-show="displayLoading" class="border-x-4 border-y-4 border-y-[#222] border-x-pink-300 p-2 rounded-full text-sm animate-spin inline-block"></span></p>
  </div>
</template>
