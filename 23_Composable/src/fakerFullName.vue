<script setup>
import { faker } from "@faker-js/faker";
import { ref } from "vue";

const firstName = ref("Aron");
const lastName = ref("Hills");

function updateName() {
  firstName.value = faker.name.firstName();
  lastName.value = faker.name.lastName();
}

</script>

<template>
  <div
    @mousemove="updateName"
    class="my-10 p-5 rounded-lg bg-[#222] text-center text-xl border-2 border-emerald-300 shadow-lg shadow-[#111]"
  >
    <p class="my-5">As the mouse moved over me, new name will rendered.</p>
    <p class="my-5">{{ firstName }} {{ lastName }}</p>
  </div>
</template>
