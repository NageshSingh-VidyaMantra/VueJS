<script setup>
import Useremail from './Useremail.vue';
import Username from './Username.vue';
import Userpassword from './Userpassword.vue';

import { ref, watch } from 'vue';

const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");

const usernameEmpty = ref(true);
const userEmailEmpty = ref(true);
const userPasswordEmpty = ref(true);

const usernameFocused = ref(false);
const useremailFocused = ref(false);
const userpasswordFocused = ref(false);

const formData = ref({});
const formValidated = ref(false);

watch(
  () => formData,
  () => {
    if (formData.value.userName && formData.value.userPassword && formData.value.userEmail)
      formValidated.value = true;
    else formValidated.value = false;
  },{deep: true}
)

function userNameHandler(userInput) {
  if (userInput.trim()) {
    usernameEmpty.value = false;
    userName.value = userInput;
    formData.value = { ...formData.value, userName: userName.value }
    usernameFocused.value = true;
  }
  else {
    usernameEmpty.value = true;
    usernameFocused.value = true;
    formValidated.value = false;
  }
}

function userEmailHandler(userInput) {
  if (userInput.trim()) {
    userEmailEmpty.value = false;
    userEmail.value = userInput;
    formData.value = { ...formData.value, userEmail: userEmail.value }
    usernameFocused.value = true;
  }
  else {
    userEmailEmpty.value = true;
    useremailFocused.value = true;
    formValidated.value = false;
  }
}

function userPasswordHandler(userInput) {
  if (userInput) {
    userPasswordEmpty.value = false;
    userPassword.value = userInput;
    formData.value = { ...formData.value, userPassword: userPassword.value }
    usernameFocused.value = true;
  }
  else {
    userPasswordEmpty.value = true;
    userpasswordFocused.value = true;
    formValidated.value = false;
  }
}

function onSubmitHandler() {
  console.log('Validaing Login ...')
  usernameFocused.value = true;
  useremailFocused.value = true;
  userpasswordFocused.value = true;

  if (formValidated.value) return console.log('Making API call')
  else return console.log('Show eRRor x_x');
}

</script>

<template>
  <section style="height: 100vh;width: 100vw;font-family: Comfortaa, cursive;"
    class="bg-white m-0 flex justify-center items-center ">

    <form @submit.prevent="onSubmitHandler"
      class="border-[1px] font-bold p-10 bg-[ghostwhite] shadow-md shadow-purple-200 rounded-xl w-[600px] ">
      <h1 class="text-purple-400 text-4xl text-center mb-5">Login Portal <i class="pl-5 fa-solid fa-envelope"></i></h1>

      <Username :userName="userName" @userNameHandler="userNameHandler" :usernameEmpty="usernameEmpty"
        :usernameFocused="usernameFocused" />
      <Useremail :userEmail="userEmail" @userEmailHandler="userEmailHandler" :userEmailEmpty="userEmailEmpty"
        :useremailFocused="useremailFocused" />
      <Userpassword :userPassword="userPassword" @userPasswordHandler="userPasswordHandler"
        :userPasswordEmpty="userPasswordEmpty" :userpasswordFocused="userpasswordFocused" />

      <div class="flex justify-center mt-5">
        <button type="submit"
          class="border-2 border-purple-400 px-5 py-2 rounded-lg bg-purple-400 text-white shadow-md shadow-purple-300 active:scale-90 transition-all"><i
            class="fa-solid fa-paper-plane pr-2"></i> Login</button>
      </div>
    </form>

  </section>
</template>

<style scoped>
.invisibleBtn {
  @apply visible;
}
</style>