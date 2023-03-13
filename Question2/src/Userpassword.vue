<script setup>
import { ref } from 'vue';
const props = defineProps(['userPassword', 'userPasswordEmpty','userpasswordFocused']);
const emits = defineEmits(['userPasswordHandler']);
const uDob = ref(props.userPassword);

function onChangeHandler(e) {
  const userInput = e.target.value
  emits("userPasswordHandler", userInput)
}
</script>


<template>
  <div class="flex justify-between items-center my-5">
    <label class="text-purple-400 font-bold text-xl">Password</label>
    <div>
      <input v-model="uDob" @change="onChangeHandler" type="password" placeholder="Userpassword"
        class="w-[250px] rounded-md py-1 pl-2 border-[1px] border-purple-200 focus:outline-purple-400"
        :class="[userPasswordEmpty && userpasswordFocused? 'emptyFalse' : 'emptyTrue']">
      <p class="text-red-400 text-sm" :class="[userPasswordEmpty && userpasswordFocused ? 'visibleP' : 'invisibleP']">*Password can't be Empty</p>
    </div>
  </div>
</template>

<style scoped>
.emptyTrue {
  @apply border-[1px] border-purple-200;
}

.emptyFalse {
  @apply border-2 bg-rose-100 border-rose-300;
}

.visibleP {
  @apply visible;
}

.invisibleP {
  @apply invisible;
}
</style>