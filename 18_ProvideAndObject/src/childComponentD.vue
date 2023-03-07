<script setup>
import { inject } from "vue ";
const empNameProvidedByParent = inject("empName");
// empAgeProvidedByParent NOT provided by parent, second parameter is default value for inject function
const empAgeProvidedByParent = inject("empAge","25");

const empEmailProvidedByParent = inject("empEmail",()=>"gale@gmail.com", true);

</script>
<template>
  <div class="bg-[#111] border-2 border-yellow-400 rounded-lg p-5 text-center space-y-5 my-10">
    <p>I am Grand...ChildD</p>
    <h1>{{ empNameProvidedByParent }}</h1>
    <p>empAge not provided by parent, but still we can pass default value by inject function </p>
    <h1>{{ empAgeProvidedByParent }}</h1>
    <h1>{{ empEmailProvidedByParent }}</h1>
  </div>
</template>
