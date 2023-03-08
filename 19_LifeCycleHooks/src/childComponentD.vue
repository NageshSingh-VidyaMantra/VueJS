<script setup>
import { inject } from "vue ";
const empNameProvidedByParent = inject("empName");
// empAgeProvidedByParent NOT provided by parent, second parameter is default value for inject function
const empAgeProvidedByParent = inject("empAge", "25");
const empEmailProvidedByParent = inject("empEmail", () => "gale@gmail.com", true);
const petNameProvidedByParent = inject("petName");
const { petName, petAge } = petNameProvidedByParent;

const reactiveDataProvidedByParent = inject("reactiveData", "Nothing Found");
setTimeout(() => { reactiveDataProvidedByParent.value = 'Code received by Child' }, 10000)

const reactiveREAdONLYDataProvidedByParent = inject("readonlyData", "Nothing Found");
setTimeout(() => { reactiveREAdONLYDataProvidedByParent.value = 'POI888' }, 2000);

const incCountByOneProvidedByParent = inject("incCountByOne")
</script>

<template>
  <div class="bg-[#111] border-2 border-yellow-400 rounded-lg p-5 text-center space-y-5 my-10">
    <p>I am Grand . . . ChildD</p>
    <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg">Name : {{ empNameProvidedByParent }}</h1>
    <p><span class="text-yellow-400 text-xl pr-2 font-bold">|</span>empAge not provided by parent, but still we can pass
      default value by inject function </p>
    <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg">Age: {{ empAgeProvidedByParent }}</h1>
    <p><span class="text-yellow-400 text-xl pr-2 font-bold">|</span>empEmail not provided by parent, but still we can
      provide return of factory function by inject function </p>
    <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg">Email : {{ empEmailProvidedByParent }}</h1>
    <p><span class="text-yellow-400 text-xl pr-2 font-bold">|</span>Passing Object from parent to child</p>
    <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg">Pet Name : {{ petName }} &nbsp;,Pet Age : {{ petAge }}
    </h1>
    <p><span class="text-yellow-400 text-xl pr-2 font-bold">|</span>Passing reactive data from parent to child, refresh
      and wait for 5 sec. Once the message is received by Child, child can mutate the value which show affect at parent
      also</p>
    <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg animate-pulse">Reactive Data Provided By Parent, Child
    can mutate it : <span>{{ reactiveDataProvidedByParent }}</span></h1>
  <h1 class="bg-yellow-400 text-black font-bold py-5 rounded-lg animate-pulse">Reactive Data READ ONLY Provided By
    Parent, Child can't mutate it, but parent can, here it is mutated by Parent Component : <span>{{
      reactiveREAdONLYDataProvidedByParent }}</span></h1>
      
    <p><span class="text-yellow-400 text-xl pr-2 font-bold">|</span>It is used to mutate count value of parent but with a twist. Discussed below . . .</p>
  <button @click="incCountByOneProvidedByParent" class="bg-[#333] text-yellow-400 p-2 rounded-lg active:bg-black border-[1px] border-yellow-400">++Count</button>
</div></template>