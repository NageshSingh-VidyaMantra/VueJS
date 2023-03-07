<script setup></script>
<template>
   <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">CHILD-C</p>

  <div :class="$attrs.class">
    <slot name="header"></slot>
    <div class="bg-[#222] p-2 rounded-lg">I am defined inside child component</div>
    <slot name="main"></slot>
    <div class="bg-[#222] p-2 rounded-lg">I am defined inside child component</div>
    <slot name="footer"></slot>
  </div>
</template>
