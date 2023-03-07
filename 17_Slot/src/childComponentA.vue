<script setup></script>
<template>
  <hr class="my-10 text-white w-full">
   <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">CHILD-A</p>

  <div class="bg-rose-200 p-3 rounded-lg my-10">
    <slot>
      <!-- It will not rendered -->
      <h1>I am inside slot outlet</h1>
    </slot>
  </div>
</template>