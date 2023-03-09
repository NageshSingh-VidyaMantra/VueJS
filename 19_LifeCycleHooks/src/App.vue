<script setup>
import ChildA from "./childComponentA.vue";

import { 
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref
 } from "vue";

onBeforeMount(()=>{
  console.log('onBeforeMount - Parent')
})

onMounted(()=>{
  console.log('onMounted - Parent')
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate - Parent')
})

onUpdated(()=>{
  console.log('onUpdated - Parent')
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount - Parent')
})

onUnmounted(()=>{
  console.log('onUnmounted - Parent')
})


const mountAndUnmountChildA = ref(true);
const count = ref(0);
</script>

<template>
  <p
    class="text-center text-White text-4xl mt-10 text-teal-300 font-extrabold my-10"
  >
    Lifecycle Hooks
  </p>
  <hr class="text-white w-full my-5" />
  <p class="mt-10">
    <span class="text-teal-300 font-extrabold text-xl">[]</span> Generally used
    Lifecycle hooks
  </p>
  <ul
    class="border-2 border-teal-400 bg-[#222] mb-5 p-5 flex flex-wrap rounded-md shadow-lg shadow-[#111] w-[630px]"
  >
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onBeforeMount( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onMounted( )
    </li>
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onBeforeUpdate( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onUpdated( )
    </li>
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onBeforeUnmount( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onUnmounted( )
    </li>
  </ul>

  <p class="mt-10">
    <span class="text-teal-300 font-extrabold text-xl">[]</span> Lessely used
    Lifecycle hooks
  </p>
  <ul
    class="border-2 border-teal-400 bg-[#222] mb-5 p-5 flex flex-wrap rounded-md shadow-lg shadow-[#111] w-[630px]"
  >
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onActivated( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onDeactivated( )
    </li>
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onRenderTracked( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onRenderTriggered( )
    </li>
    <li
      class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg"
    >
      onErrorCaptured( )
    </li>
    <li
      class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg"
    >
      onServerPrefetch( )
    </li>
  </ul>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onBeforeMount( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called right before the component is to be mounted.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>When the
      hook is called, the components has finished setting up its reactive state,
      but no DOM nodes have been created yet.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>It is
      about to execute its DOM render effect for the first time.
    </p>
  </div>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onMounted( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called after the component has been mounted.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is typically used for performing
      <span class="bg-teal-900 p-1 px-2 rounded">side effects</span> that need
      access to the component's rendered DOM, or for limiting DOM-related code
      to the client in a server-render application.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is not called during server-side rendering.
    </p>
    <h1 class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>A
      component is considered mounted after :
      <p>
        <span class="px-5 text-teal-400 text-xl font-bold">-</span>All of its
        synchronous child components have been mounted.
      </p>
      <p>
        <span class="px-5 text-teal-400 text-xl font-bold">-</span>Its own DOM
        tree has been created and inserted into the parent container.
      </p>
    </h1>
  </div>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onBeforeUpdate( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called after the component his about toupdate its DOM tree due to a
      reactive state change.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is typically used to access the DOM state before Vue update the DOM. It is
      also safe to modify component state inside this hook
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is not called during server-side rendering.
    </p>
  </div>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onUpdated( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called after the component has updated its DOM tree due to a reactive
      state change.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is called after any DOM update of the component, which can be caused by
      different state changes.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>A parent
      component's updated hook is called after that of it's child components.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>Do Not
      mutate component state in the update dhook - this will likely lead to an
      infinite loop.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is not called during server-side rendering.
    </p>
  </div>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onBeforeUpmount( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called before the component instance is to be unmounted.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>When this
      hook is called, the component instance is still fully functional.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is not called during server-side rendering.
    </p>
  </div>

  <div
    class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300"
  >
    <p
      class="bg-teal-300 my-5 p-2 rounded-lg text-black text-center w-full text-lg"
    >
      onUnmounted( )
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is
      called after the component has unmounted.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is called to cleanup created side effects such as timers, DOM event
      listeners or server connections.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook
      is not called during server-side rendering.
    </p>
    <p class="my-2">
      <span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>A
      component is considered unmounted after :
    </p>

    <p>
      <span class="px-5 text-teal-400 text-xl font-bold">-</span>All of its
      child components have been unmounted.
    </p>
    <p>
      <span class="px-5 text-teal-400 text-xl font-bold">-</span>All of its
      associated reactive effects have been stopped.
    </p>
  </div>

  <hr class="w-full my-10" />

  <h1 class="text-xl font-bold text-teal-400">Parent Component</h1>
  <div class="bg-[#222] p-5 rounded-lg mb-10 text-center border-2 border-teal-400 shadow-lg shadow-black">
    <ChildA v-if="mountAndUnmountChildA" />
    <button @click="mountAndUnmountChildA = !mountAndUnmountChildA"
    class="shadow-lg shadow-black border-2 border-teal-400 p-3 active:bg-[#222] bg-[#333] rounded-md my-3 text-teal-300 font-bold"
    >
      Mount / Unmount
    </button>
    <p>**By clicking on button we are mounting and unmounting ChildA component.</p>
  </div>

  <div class="bg-[#222] p-5 rounded-lg mb-10 text-center border-2 border-teal-400 shadow-lg shadow-black">
    <p class="my-5 text-2xl"> &lt; Count : {{ count }} &gt;</p>
    <button @click="++count;"
    class="shadow-lg shadow-black border-2 border-teal-400 p-3 active:bg-[#222] bg-[#333] rounded-md my-3 text-teal-300 font-bold"
    >
      + + Count
    </button>
  </div>
</template>
