<script setup>
let text = "TextInterpolation";
const num = 5;
const darkmode = true;
function add(input) {
  console.log(num + input);
}
</script>

<template>
  <!-- Below is the example TextInterpolation -->
  <h1 style="color: lightgreen">Vue App</h1>
  <h1>{{ text }}</h1>
  <h1>{{ 50 + 20 }}</h1>
  <h1>{{ num * 5 }}</h1>
  <!-- function will be displayed in console in each case  -->
  <h1>{{ add(2) }}</h1>
  {{ add(2) }}
  <!-- Below show error -->
  <!-- <h1>{{darkmode ? <i>darkmodeOn</i> : <i>darkmodeOff</i> }}</h1> -->
  <!-- <h1>{{ const three = 3; }}</h1> -->
  
  <h1>{{ darkmode ? "<i>darkmodeOn</i>" : '<i>darkmodeOff</i>' }}</h1>
</template>

<style scoped>
h1 {
  font-family: "Comfortaa", cursive;
  font-size: x-large;
  margin-top: 5vh;
  color: aliceblue;
}
</style>
