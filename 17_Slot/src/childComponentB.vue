<script setup></script>
<template>
   <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">CHILD-B</p>

  <div class="bg-rose-200 p-3 rounded-lg my-10">
    <slot>
      <!-- It will not rendered -->
      <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400"><span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">NO</span> slot content is provided from Parent Component.</h1>
      <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">I am inside slot outlet,  I am <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">Fallback-Content</span></h1>
      <h1 class="my-3 bg-[#222] p-5 rounded-md shadow-sm shadow-rose-400">If <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">NO</span> slot content is provided from the Parent Component than anything written inside it will be rendered else <span class="bg-rose-400 font-bold p-1 px-2 text-[#222]">ONLY</span> slot content</h1>
    </slot>
  </div>
</template>
