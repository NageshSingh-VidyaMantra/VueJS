<script setup>
import { reactive, ref } from "vue";

let primitiveType = reactive(true);

let num1 = { a: 10, b: 20 };
let num2 = reactive({ a: 21, b: 31 });
let counter = reactive({ count: 0 });
setTimeout(() => {
  num1.a = 30;
  console.log("num.a : " + num1.a);
}, 4000);

setTimeout(() => {
  num2.a = 30;
  console.log(num2); //Proxy
  console.log("num2.a : " + num2.a);
}, 2000);

let birdOne = ref("B1");
let birdTwo = ref("B2");
let birdThree = ref("B3");

let mBirdOne = "m1";

let birds = reactive({
  birdOne,
  birdTwo,
  birdThree,
});

// let mBirds = reactive({ mBirdOne: ref(mBirdOne) });
let mBirds = reactive({ mBirdOne});

function changeMBirdName() {
  mBirds.mBirdOne = "M1";
}

function changeBirdName() {
  birds.birdOne = "A1";
  birds.birdTwo = "A2";
  birds.birdThree = "A3";
  return;
}

function onClickHandler() {
  ++counter.count;
}

function onClickChangeAdminAndAddNewUser() {
  reactiveObj.user.push("Jack");
  reactiveObj.admin.adminName = "Nina";

  console.log(reactiveObj);
  console.log(reactiveObj.admin);
  console.log(reactiveObj.user);
}

function changeBool() {
  return (primitiveType = false);
}

const reactiveObj = reactive({
  admin: { adminName: "Jack" },
  user: ["Aman", "Anna"],
});
</script>

<template>
  <p>{{ primitiveType }} (** error shown in console)</p>
  <button @click="changeBool()">Change to False</button>
  <h1>Without Reactivity</h1>
  <h2>SUM = {{ num1.a + num1.b }}</h2>

  <h1>With Reactivity</h1>
  <h2>SUM = {{ num2.a + num2.b }}</h2>

  <button @click="onClickHandler()">++Count</button>
  <h2>Count Value : {{ counter.count }}</h2>

  <h1>Deep Reactivity</h1>
  <h3>In vue, state is deeply reactive by default.</h3>
  <h3>
    This means you can except changes to be detected even when nested objects or
    arrays
  </h3>
  <div>
    <h3>
      <em>Admin-Name : {{ reactiveObj.admin.adminName }}</em>
    </h3>
    <h3>
      <em>User-Names : {{ reactiveObj.user }}</em>
    </h3>
  </div>

  <button @click="onClickChangeAdminAndAddNewUser()">
    Change Admin and Add New-user
  </button>
  <p>
    Show Birds Name : {{ birdOne }}, {{ birdTwo }},
    {{ birdThree }}
  </p>
  <p>
    Show Birds Name contain in Reactive : {{ birds.birdOne }},
    {{ birds.birdTwo }},
    {{ birds.birdThree }}
  </p>
  <button @click="changeBirdName()">Change Bird Name</button>

  <p>
    Show Mutated Birds Name : {{ mBirdOne }}
  </p>

  <p>
    Show Mutated Birds Name in Reactive : {{ mBirds.mBirdOne }}
  </p>

  <button @click="changeMBirdName()">Change m Bird Name</button>

</template>

<style scoped>
p {
  font-size: larger;
}

h1 {
  color: lightgreen;
  margin-top: 50px;
}

button {
  margin: 30px 0;
  font-size: larger;
  background-color: lightgreen;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid lightgreen;
}

button:active {
  background-color: transparent;
  color: lightgreen;
}

div {
  padding: 5px;
  background-color: #222;
}
</style>
