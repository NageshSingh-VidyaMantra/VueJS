<script setup>
import { ref } from "vue";
defineEmits(["incCount", "msgFromChild","fSubmit"]);
const userName = ref("");

</script>

<template>
  <hr class="trext-white w-full">
  <p class="mt-10 mb-5 text-3xl text-teal-400 font-bold">CHILD 1</p>

  <p class="mt-10 mb-5 text-lg">
    I am Child Component, manuplating count of parent, by accessing the count
    function of Parent
  </p>
  <div
    class="bg-[#111] p-8 rounded-lg space-y-10 mb-10 text-xl shadow-md shadow-teal-400"
  >
    <button
      @click="$emit('incCount')"
      class="w-full block border-[1px] p-2 rounded-md bg-[#222] active:bg-[#111]"
    >
      ++Count
    </button>

    <button
      @click="$emit('msgFromChild', 'Hi all : )')"
      class="w-full block border-[1px] p-2 rounded-md bg-[#222] active:bg-[#111]"
    >
      Send Message to Parent
    </button>
  </div>

  <p class="mt-10 text-lg">Send Form data to parent and Validate it.</p>

  <form
    @submit.prevent="$emit('fSubmit', userName)"
    class="bg-[#111] my-10 p-14 rounded-xl shadow-lg shadow-teal-400"
  >
    <div class="space-x-8 my-5">
      <label>Username</label>
      <input
        class="pl-2 rounded-md bg-teal-400 text-black focus:outline-0"
        type="text"
        id="name"
        v-model="userName"
        placeholder="Username"
      />
    </div>
    <button
      class="p-2 rounded-lg bg-teal-400 text-black active:bg-teal-500"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>