<script setup>
import { onMounted, ref } from "vue";
const emits = defineEmits(['usernameHandler'])
const username = ref();

onMounted(()=>{
  username.value.focus();
})

function onChangeHandler() {
  console.log(username.value);
  console.log(username._value.value);
  const inputRef = username._value.value;
  emits('usernameHandler', inputRef);
}

</script>
s
<template>
  <p class="mt-20 font-bold text-pink-400 text-4xl">I am a Child-A Component</p>
  <div
    class="bg-[#222] p-10 flex justify-evenly rounded-lg border-2 border-pink-300"
  >
    <label class="text-xl text-pink-300 font-bold">Username</label>
    <input
      ref="username"
      @change="onChangeHandler"
      type="text"
      placeholder="Enter Name"
      class="py-[1px] pl-3 text-black font-bold rounded-sm focus:outline-pink-300 "
    />
  </div>
  <p class="text-lg">**On reloading of page, this text field is automatically selected. Text Field must be mounted</p>
  <p class="text-lg">**To read the input value of field --> username._value.value</p>

</template>
