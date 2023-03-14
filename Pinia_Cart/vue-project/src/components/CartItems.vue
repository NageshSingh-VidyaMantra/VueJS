<script setup>
import { items } from "../items";
import Items from "./Items.vue";
</script>

<template>
  <section class="flex flex-col justify-center items-center my-10">
    <div class="bg-[#222] rounded-xl">
        <h1 class="text-teal-400 text-5xl mt-10 text-center">Cart Items</h1>
      <Items
        v-for="item in items"
        :itemName="item.itemName"
        :itemPrice="item.itemPrice"
      />
    <div class="text-white text-5xl border-2 border-teal-400 p-10 rounded-xl flex justify-around items-center"><span>Grand Total</span> <span><i class=" text-teal-400 fa-solid fa-indian-rupee-sign"></i> 987564</span></div>
    </div>
  </section>
</template>
