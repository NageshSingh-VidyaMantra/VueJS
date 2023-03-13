<script setup>
import ChildA from './components/ChildA.vue';
import ChildB from './components/ChildB.vue';
</script>

<template>
  <section class="px-10 text-white">
    <p class="text-yellow-400 text-4xl text-center my-5">Pinia</p>
    <hr />
    <p class="text-xl text-left my-5">
      <span class="font-bold text-yellow-400 pr-2">[]</span> Pinia is a store
      library for vue, it allow you to share a state across components/pages.
    </p>
    <div class="bg-[#222] rounded-lg border-2 border-yellow-400 px-5">
      <p class="text-xl text-left my-5">
        <span class="font-bold text-yellow-400 pr-2">-></span> Create Pinia
        Instance and Pass it to app.
      </p>
      <p class="text-xl text-left my-5">
        <span class="font-bold text-yellow-400 pr-2">-></span> Define Setup
        Store.  
      </p>
      <p class="text-xl text-left my-5">
        <span class="font-bold text-yellow-400 pr-2">-></span> Use Store in
        Components.
      </p>
    </div>

    <p class="text-xl text-left my-5">
      <span class="font-bold text-yellow-400 pr-2">[]</span> A Store is an entity holding state and business logic that isn't bound to your Component tree.</p>
  
      <div class="bg-[#222] rounded-lg border-2 border-yellow-400 px-5">
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">defineStore() </span> This is used to define a store.</p>
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">defineStore() </span> You can define as many store as you want and you should define ach store in a different file.</p>
      <p class="text-xl text-left my-5"><span class="block text-yellow-400 pr-2 text-center">defineStore('unique_name/unique_ID of store', setup_function) </span></p>
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2 text-center">ref --> </span> becomes state properties.</p>
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2 text-center">computed --> </span> becomes getters</p>
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2 text-center">function --> </span> becomes actions</p>
    </div>

    <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">[] Store</span> is an object wrapped with reactive, meaning you can't destructure it.</p>
    <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">[] storeToRefs()</span> This is used to extract properties from the store while keeping its reactivity.</p>
    <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2"> --> </span> It will create refs for every reactivity property.</p>
    <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2"> --> </span> This is useful when you are only using state from the store but <span class="text-yellow-400">NOT calling any action.</span></p>
    <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2"> --> </span> You can destructure actions directly from the store as they are bound to the store itself .</p>

    <div class="bg-[#222] rounded-lg border-2 border-yellow-400 px-5">
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">$patch() </span> Method allow you to apply multiple changes at the same time with a partial state object. (OPTION)</p>
      <p class="text-xl text-left my-5"><span class="text-yellow-400 pr-2">$patch() </span> Method also accepts a function to group this kind of mutations hat are difficult to apply with a patch object. (COMPOSITION)</p>
    </div>
    <ChildA />
    <ChildB />


  </section>

</template>
