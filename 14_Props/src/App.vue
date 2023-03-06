<script setup>
import { ref } from "vue";
import ChildA from "./childComponentA.vue";
import ChildB from "./childComponentB.vue";
import ChildC from "./childComponentC.vue";
const firstName = ref("Nagesh");
const middleName = ref("Singh");
const lastName = ref("Tomer");

const empRec = {
  empId: 1001,
  empName: 'Gale',
  age: 26
}

const otherInf = ['emp@gmail.com',9876543210,'2015POX']

setTimeout(() => {
  firstName.value = "Varun";
  middleName.value = "Sharma";
  lastName.value = "Pandit";
}, 5000);
</script>
<template>
  <h1 class="text-lime-400 text-4xl my-5">Props</h1>
  <div class="space-x-9 bg-[#111] p-5 rounded-md">
    <p class="my-5">One way data flow from Parent to Child</p>
    <span class="border-l-2 pl-2 border-lime-400">Declare Prop</span>
    <span class="border-l-2 pl-2 border-lime-400">Pass Prop</span>
    <span class="border-l-2 pl-2 border-lime-400">Use Prop</span>
    <p class="my-5">
      Any change made in Parent Component will affect Child Component
    </p>
    <p class="my-5">
      Don't try to mutate props in Child Component, vueJS will warn you.
    </p>
    <p class="my-5">There are ways to transform them in Child . . .</p>
    <p class="my-5">
      <span class="border-l-2 pl-2 border-lime-400"></span> Define a local data
      property that uses the prop as an initial value. But any change in parent
      component will not be reflected in child component.
    </p>
    <p class="my-5">
      <span class="border-l-2 pl-2 border-lime-400"></span> Use it in Computed
      Property, It auto-updats when the prop changes
    </p>
  </div>
  <h1 class="text-lime-400 text-3xl mt-20">Static Prop</h1>
  <ChildA childName="AC-1" />
  <ChildA childName="AC-2" />
  <ChildA childName="AC-3" />

  <h1 class="text-lime-400 text-3xl mt-20">Dynamic Prop</h1>
  <ChildB
    :firstName="firstName"
    :middleName="middleName"
    :lastName="lastName"
  />

  <h1 class="text-lime-400 text-3xl mt-20">Passing Array, Objects to Components</h1>
  <ChildC v-bind:otherInf="otherInf" v-bind:empRec="empRec" :age="empRec.age"/>
  <h1 class="text-xl mb-2">otherInf is passed as * v-bind:otherInf="otherInf" *</h1>
  <h1 class="text-xl mb-2">empRec is passed as * v-bind:empRec="empRec" *</h1>
  <h1 class="text-xl mb-2">Age is passed as * :age="empRec.age" *</h1>
</template>
