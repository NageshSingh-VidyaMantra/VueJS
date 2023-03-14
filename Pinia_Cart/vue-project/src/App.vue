<script setup>
import NavBar from "./components/NavBar.vue";
import EmptyCart from "./components/EmptyCart.vue";
import Shop from "./components/Shop.vue";
import CartItems from "./components/CartItems.vue";
import { items } from "./items";

console.log(items);
</script>

<template>
  <section class="mb-20">
    <NavBar />
    <CartItems />
    <EmptyCart />
      <section class="flex justify-center items-center text-center flex-wrap px-20">
        <Shop
          v-for="item in items"
          :itemName="item.itemName"
          :itemPrice="item.itemPrice"
        />
      </section>
  </section>
</template>
