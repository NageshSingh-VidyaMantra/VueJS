<script setup>
import URL from "../img/vuejs.png";
const imgId = "vueJsImg";
const imgHeight = 50;
const botGreeting = ["bot-1", "bot-2", "'_'"];
const attrObj = { id: "A1", class: "a2" };
const attrs = [
  { id: "A1", class: "a2" },
  { id: "B1", class: "b2" },
  { id: "C1", class: "c2" },
];

// const isDisabled = ""; //true
// const isDisabled = 55; // true
// const isDisabled = true; // true
// const isDisabled = 0; // false
const isDisabled = false; // false
</script>

<template>
  <h1 style="color: lightgreen">Attribute Binding v-bind</h1>
  <img
    v-bind:src="URL"
    :id="imgId"
    alt="vueImg"
    v-bind:height="imgHeight + 'px'"
  />
  <h1 :id="botGreeting[0]">This is {{ botGreeting[0] }}</h1>
  <h1 :id="botGreeting[1]">This is {{ botGreeting[1] }}</h1>
  <h1 :id="botGreeting[2]">This is {{ botGreeting[2] }}</h1>

  <!-- Dynamic Binding Multiple Attribute -->
  <h1 style="color: lightgreen; margin-top: 20vh">
    Dynamic Binding Multiple Attribute
  </h1>

  <h3 v-bind="attrObj">This is {{ botGreeting[0] }}</h3>

  <h3 v-bind="attrs[0]">This is {{ botGreeting[0] }}</h3>
  <h3 v-bind="attrs[1]">This is {{ botGreeting[0] }}</h3>
  <h3 v-bind="attrs[2]">This is {{ botGreeting[0] }}</h3>

  <section>
    <button disabled>BOt-1</button>
    <button :disabled="isDisabled">BOt-2</button>
    <button v-bind:disabled="isDisabled">BOt-3</button>
  </section>
</template>

<style scoped>
section {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
}

button {
  font-size: larger;
  background-color: lightgreen;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

button:active {
  background-color: green;
  color: white;
}
</style>
