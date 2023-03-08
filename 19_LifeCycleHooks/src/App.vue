<script setup>
</script>

<template>
  <p class="text-center text-White text-4xl mt-10 text-teal-300 font-extrabold my-10">Lifecycle Hooks</p>
  <hr class="text-white w-full my-5">
  <p class="mt-10"><span class="text-teal-300 font-extrabold text-xl">[]</span> Generally used Lifecycle hooks</p>
  <ul class="bg-[#222] mb-5 p-5 flex flex-wrap rounded-md shadow-lg shadow-[#111] w-[620px]">
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onBeforeMount( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onMounted( )</li>
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onBeforeUpdate( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onUpdated( )</li>
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onBeforeUnmount( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onUnmounted( )</li>
  </ul>

  <p class="mt-10"><span class="text-teal-300 font-extrabold text-xl">[]</span> Lessely used Lifecycle hooks</p>
  <ul class="bg-[#222] mb-5 p-5 flex flex-wrap rounded-md shadow-lg shadow-[#111] w-[620px]">
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onActivated( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onDeactivated( )</li>
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onRenderTracked( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onRenderTriggered( )</li>
    <li class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-[250px] text-lg">onErrorCaptured( )</li>
    <li class="bg-teal-900 m-5 p-2 rounded-lg text-white text-center w-[250px] text-lg">onServerPrefetch( )</li>
  </ul>

  <div class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300">
    <p class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-full text-lg">onBeforeMount( )</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is called right before the
      component is to be mounted.</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>When the hook is called, the
      components has finished setting up its reactive state, but no DOM nodes have been created yet.</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>It is about to execute its DOM render
      effect for the first time.</p>
  </div>

  <div class="bg-[#222] my-20 p-5 rounded-md shadow-lg shadow-[#111] border-[2px] border-teal-300">
    <p class="bg-teal-300 m-5 p-2 rounded-lg text-black text-center w-full text-lg">onMounted( )</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This is called after the
      component has been mounted.</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook is typically used for
      performing <span class="bg-teal-900 p-1 px-2 rounded">side effects</span> that need access to the component's
      rendered DOM, or for limiting DOM-related code to the client in a server-render application.</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>This hook is not called during
      server-side rendering.</p>
    <p class="my-2"><span class="text-teal-300 font-extrabold text-xl pr-5">[]</span>A component is considered mounted
      after : <br>
    <p> <span class="px-5 text-teal-400 text-xl font-bold">-</span>All of its synchronous child components have been
      mounted.</p>
    <p> <span class="px-5 text-teal-400 text-xl font-bold">-</span>Its own DOM tree has been created and inserted into the
      parent container.</p>
  </p>
</div></template>