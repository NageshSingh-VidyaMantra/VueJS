<script setup>
import ChildA from "./childComponentA.vue";
import ChildB from "./childComponentB.vue";
import ChildC from "./childComponentC.vue";
import { ref } from "vue";
let count = ref(0);
let formData = ref('loading . . .');
let msg = ref("waiting . . .");

let placeHolder = ref("Username")
let labelData = ref("User-Name")
let inputType = ref("text")

//Event Validation
// Pass this to formDataHandler
const validateEmit = defineEmits({
  fSubmit: ({ userName }) => {
    if (userName) return true;
    else false;
  },
});

function msgFromChild(message) {
  return (msg.value = message);
}

function formDataHandler(userName) {
  validateEmit('fSubmit', {userName})
  formData.value = userName;
}
</script>

<template>
  <p class="text-White text-5xl mt-10">Component Event</p>

  <hr class="my-10 text-white w-full">
  <p class="mt-10 text-lime-400 text-3xl m-5">I am Parent Component</p>
  <div
    class="bg-[#111] p-8 rounded-lg space-x-16 mb-10 text-xl shadow-md shadow-lime-400"
  >
    <span class="text-lime-400">{{ count }}</span>
    <button
      @click="++count"
      class="border-[1px] p-2 rounded-md bg-[#222] active:bg-[#111]"
    >
      ++Count
    </button>
  </div>

  <div
    class="bg-[#111] p-8 rounded-lg space-x-16 mb-10 text-xl shadow-md shadow-lime-400"
  >
    <span>Message by Child1 - </span>
    <span class="text-lime-400">{{ msg }}</span>
  </div>

  <div
    class="bg-[#111] p-8 rounded-lg space-x-16 mb-10 text-xl shadow-md shadow-lime-400"
  >
    <span>Form data by Child1 - </span>
    <span class="text-lime-400">{{ formData }}</span>
  </div>

  <ChildA
    @incCount="++count"
    @msgFromChild="msgFromChild"
    @fSubmit="formDataHandler"
  />

  <ChildB :placeHolder="placeHolder" :labelData="labelData" :inputType="inputType"/>

  <ChildC placeHolder="Userpassword" labelData="User-Password" inputType="password"/>

</template>
