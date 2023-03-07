<script setup></script>
<template>
  <p class="text-White text-xl mt-10 text-rose-400 font-extrabold my-3">
    CHILD-D
  </p>
  <p>Below data is sent by Child Component to Parent Component.</p>


  <!-- Passing below data to parent -->
  <!-- you can't use name. It is a predefined attribute used to provide name-->

  <div :class="$attrs.class">
    <slot myName="Nina" :age="25" :pet="{petName: 'Scobby'}" :email="['nina@gmail.com']"></slot>
  </div>
</template>
