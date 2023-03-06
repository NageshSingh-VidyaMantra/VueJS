<script setup>
import { ref, reactive } from "vue";
import AnotherCom1 from './AnotherVueComponent1.vue'
import AnotherCom2 from './AnotherVueComponent2.vue'
import AnotherCom3 from './AnotherVueComponent3.vue'

const styleBigDiv = reactive({
  height: "250px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
  margin: "50px",
  shadowFlag: false,
});

const styleSmallDiv = reactive({
  height: "100px",
  width: "300px",
  backgroundColor: "slategray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
});

const shadowDiv = reactive({
  boxShadow: "5px 5px 5px slategray",
});

function lightMode() {
  styleBigDiv.backgroundColor = "white";
  styleSmallDiv.backgroundColor = "slateGray";
}

function darkMode() {
  styleBigDiv.backgroundColor = "black";
  styleSmallDiv.backgroundColor = "#333";
}

function addShadow() {
  if (!styleBigDiv.shadowFlag) {
    styleBigDiv.boxShadow = "5px 5px 20px slategray";
    styleBigDiv.shadowFlag = true;
  } else {
    styleBigDiv.boxShadow = "none";
    styleBigDiv.shadowFlag = false;
  }
}

const userName = ref("");
const validate = ref(true);
function onLoginHandler(event) {
  event.preventDefault();
  console.log("form submitted");
  console.log(userName.value);
  if (!userName.value || !userName.value.trim()) validate.value = false;
  else {
    validate.value = true;
    userName.value = "";
  }
}
</script>
<template>
  <h1 class="my-3 text-4xl text-lime-400">Style Binding</h1>
  <button
    @click="darkMode"
    class="my-10 text-black border-2 border-black p-2 rounded-full font-bold active:bg-black"
  >
    Dark-Mode
  </button>
  <hr />
  <button
    @click="lightMode"
    class="my-10 text-white border-2 border-white p-2 rounded-full font-bold active:bg-white"
  >
    Light-mode
  </button>
  <hr />
  <div :style="styleBigDiv">
    <div :style="styleSmallDiv" :class="{ validate }">Hello</div>
  </div>

  <hr />
  <button
    @click="addShadow"
    class="my-10 text-slate-500 border-2 border-slate-500 p-2 rounded-full font-bold active:bg-slate-500"
  >
    Toggle-Shadow
  </button>

  <h1 class="my-5 text-4xl text-lime-400">Class Binding</h1>

  <h1 class="my-5 text-2xl">Two ways to use class attribute</h1>
  <p class="text-lg">
    1. Object => :class="{ class1Name: isActive, class2Name: isError }"
  </p>
  <p class="text-lg">In this way we add desired class to our HTML element</p>
  <p class="text-lg">
    Here we are seperately checking the validation of each class
  </p>
  <p class="my-5 text-lime-200 text-xl">
    E.g. "&lt;button class = "rounded-md text-2xl" :class="{active: isActive,
    error: isError}"&gt; Submit &lt;/button&gt;"
  </p>

  <p class="text-lg">
    2. Array => :class="[validate ? 'class1Name' : 'class2Name']"
  </p>
  <p class="text-lg">
    In this way we add desired class out of two to our HTML element
  </p>

  <p class="my-5 text-lime-200 text-xl">
    E.g. "&lt;button class = "rounded-md text-2xl" :class="[validate ?
    'validateTrue' : 'validateFalse']"&gt; Submit &lt;/button&gt;"
  </p>

  <p class="my-5 text-xl">3. Combination of Array & Object</p>

  <p class="my-5 text-lime-200 text-xl">
    3. Array => :class="[{'class1Name' : checkValidation}, [validate ?
    'class2Name' : 'class3Name'], class4Name]"
  </p>

  <form
    @submit="onLoginHandler"
    class="border-2 border-lime-200 p-10 rounded-lg my-20 mx-5"
  >
    <div class="space-x-7">
      <label for="" class="font-bold">UserName</label>
      <input
        @change="
          (e) => {
            userName = e.target.value;
            console.log(userName);
          }
        "
        type="text"
        class="rounded pl-3 text-black"
        :class="[validate ? 'validateTrue' : 'validateFalse']"
      />
    </div>
    <input
      type="submit"
      class="mt-5 text-black border-2 border-lime-200 p-2 rounded-lg font-bold bg-lime-200 active:bg-transparent active:text-lime-200"
      value="Login"
    />
  </form>
  <hr class="my-5" />

  <h1 class="my-5 text-4xl text-lime-400">$attrs</h1>

  <p class="mx-20 my-5 text-lg">
    There is only 1 root element in template or non, if only 1 HTML element tag
    is present that is the root, else if more that 1 HTML present that no one is root.    
  </p>

  <h1 class="mx-20 my-5 text-lg class-h1" >My class is class-h1</h1>
  <AnotherCom1 class="my-5 text-lg class-addedFromParentComp"/>
  <hr class="my-5">
  <AnotherCom2 class="my-5 text-lg class-addedFromParentComp"/>
  <hr class="my-5">
  <AnotherCom3 class="my-5 text-lg text-lime-100 class-addedFromParentComp"/>
</template>
<style scoped>
.validateTrue {
  @apply border-2 border-white;
}
.validateFalse {
  @apply border-2 border-rose-500 bg-rose-300;
}
</style>
