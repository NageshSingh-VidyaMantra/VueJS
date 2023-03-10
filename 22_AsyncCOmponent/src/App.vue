<script setup>
import ChildA from "./childComponentA.vue";
import ErrorComponent from "./Error.vue";
import LoadingComponent from "./Loading.vue";
import { ref, provide, defineAsyncComponent } from "vue";

const toggleChildA = ref(false);
const toggleChildB = ref(false);
const ChildBUploaded = ref(false);

provide("toggleChildA", toggleChildA);

// DONOT use { } inside defineAsyncComponent
const AsyncChildB = defineAsyncComponent(() => import("./childComponentB.vue"));

const AsyncChildC = defineAsyncComponent({
  loader: () => import("./childComponentC.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  timeout: 100
});
</script>

<template>
  <h1 class="text-pink-300 text-4xl font-bold text-center my-8">
    Async Component
  </h1>
  <hr />
  <p class="my-5 text-lg font-bold">
    <span class="pr-5 text-pink-300">[]</span> As the name suggest, it is async
    in nature. Load it from the serven when required.
  </p>

  <p class="my-5 text-lg font-bold">
    <span class="pr-5 text-pink-300">[]</span> Vue has a
    <span class="bg-pink-300 p-1 rounded text-black">defineAsyncComponent</span>
    function, that accepts a loader function that returns a Promise.
  </p>

  <div class="w-full my-20 text-center">
    <button
      @click="toggleChildA = !toggleChildA"
      class="transition-all mx-10 p-5 border-2 border-pink-300 shadow-xl shadow-[#111] rounded-lg bg-[#333] active:shadow-md active:shadow-[#111] active:p-4 text-pink-300 active:text-[15px] text-lg"
    >
      Toggle Child-A
    </button>
    <button
      @click="(ChildBUploaded = true), (toggleChildB = !toggleChildB)"
      class="transition-all mx-10 p-5 border-2 border-pink-300 shadow-xl shadow-[#111] rounded-lg bg-[#333] active:shadow-md active:shadow-[#111] active:p-4 text-pink-300 active:text-[15px] text-lg"
    >
      Toggle Child-B
    </button>
  </div>

  <ChildA />

  <!-- Only work with v-if, NOT with v-show -->
  <!-- But by using v-if and v-show like this, we can get the desired result -->
  <AsyncChildB v-if="ChildBUploaded" v-show="toggleChildB" />

  <hr />
  <h1 class="text-pink-300 text-4xl font-bold text-center my-8">
    Loading And Error States
  </h1>

  <p class="my-5 text-lg font-bold">
    <span class="pr-5 text-pink-300">[]</span> Asynchronous operations involve
    loading and error state
  </p>

  <div
    class="my-10 p-5 rounded-lg bg-[#222] text-left text-xl border-2 border-pink-300 shadow-lg shadow-[#111]"
  >
    <p class="my-5">const AsyncUserComp = defineAsyncComponent({</p>
    <p class="my-5">
      loader : ( ) => import( '. . .file-path' )
      <span class="text-pink-300">// the loader function </span>
    </p>
    <p class="my-5">
      loadingComponent : LoadingComponent
      <span class="text-pink-300"
        >// A component to display, while async component is loading.
      </span>
    </p>
    <p class="my-5">
      delay: 200
      <span class="text-pink-300"
        >// Delay before showing the loadin component. Default 200ms</span
      >
    </p>
    <p class="my-5">
      errorComponent: ErrorComponent
      <span class="text-pink-300"
        >// A component to use if the load fails or timeout
      </span>
    </p>
    <p class="my-5">
      timeout: 3000 <span class="text-pink-300">// Default: infinity</span>
    </p>
  </div>

  <AsyncChildC />

  <p class="my-10">In order to see the effect follow these steps . . . </p>
  <a 
  class="transition-all p-5 border-2 border-pink-300 shadow-xl shadow-[#111] rounded-lg bg-[#222] active:shadow-md active:shadow-[#111] active:p-4 text-pink-300 active:text-[15px] text-lg"
  href="https://www.youtube.com/watch?v=7o9EDcPbFFY&list=PLbGui_ZYuhih5ItBhn2cTncaS24_Kgeui&index=29" target="_blank">Steps at 26:53</a>
  <hr class="my-20">
</template>
