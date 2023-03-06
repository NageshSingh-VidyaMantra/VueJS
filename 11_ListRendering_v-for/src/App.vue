<script setup>
import vueButton from "./Button.vue";
const displayA = false;
const displayB = true;
const displayC = true;

const contactListA = [
  { name: "Anna", number: 9876543210 },
  { name: "Aman", number: 9988776655 },
];

const contactListB = [
  { name: "Billy", number: 9876543210 },
  { name: "Bow", number: 9988776655 },
];

const contactListC = [
  { name: "Clint", number: 9876543210 },
  { name: "Colt", number: 9988776655 },
];

const contactList = [...contactListA, ...contactListB, ...contactListC];

const pet = {
  name: "Garry",
  breed: "Snail",
  owner: "SpongeBob",
};

const courses = {
  react: {
    id: 1,
    title: "Learn React",
    author: "Gale",
  },
  vue: {
    id: 2,
    title: "Learn Vue",
    author: "Billy",
  },
  tailwindCSS: {
    id: 3,
    title: "Learn TailwindCSS",
    author: "Stu",
  },
  typeScript: {
    id: 3,
    title: "Learn TypeScript",
    author: "Nina",
  },
};

const languages = [
  ["Java Script", "Type Script"],
  ["Node", "Express"],
  ["MongoDB", "Firebase"],
];

const buttons = ["Login", "Submit", "SignUp"];
</script>

<template>
  <h1 class="my-5 text-lime-400 text-5xl font-bold">v-for</h1>
  <h1 class="my-5 text-white text-xl">:key must be unique</h1>
  <h1 class="my-5 text-white text-xl">
    Precedence of
    <span class="font-bold text-lime-200"
      >{ v-if v-else-if v-else & v-show }</span
    >
    > v-for
  </h1>

  <h1 class="mt-20 text-white text-3xl">Array of Objects</h1>

  <div
    class="my-10 bg-black p-5 rounded-md font-bold text-xl drop-shadow-xl"
    v-if="displayA"
    v-for="contact in contactListA"
    :key="index"
  >
    <p>{{ contact.name }} &nbsp; : &nbsp; {{ contact.number }}</p>
  </div>

  <div
    class="my-10 bg-black p-5 rounded-md font-bold text-xl drop-shadow-xl"
    v-for="(contact, index) in contactListB"
    v-if="displayB"
    :key="index"
  >
    <p>{{ contact.name }} &nbsp; : &nbsp; {{ contact.number }}</p>
  </div>

  <div
    class="my-10 bg-[#111] p-5 rounded-md font-bold text-xl shadow-xl shadow-[#222]"
    v-for="contact in contactListC"
    v-show="displayC"
    :key="index"
  >
    <p>{{ contact.name }} &nbsp; : &nbsp; {{ contact.number }}</p>
  </div>

  <h1 class="mt-20 text-white text-3xl">Array in Array</h1>

  <div class="my-10" v-for="language in languages" :key="index">
    <span
      class="inline-block mx-10 bg-[#222] p-5 w-52 rounded-md font-bold text-xl shadow-xl shadow-[#111]"
      v-for="item in language"
      >{{ item }}</span
    >
  </div>

  <h1 class="mt-20 text-white text-3xl">Only Obj</h1>

  <div
    class="my-10 bg-[#111] p-5 rounded-md font-bold text-xl shadow-xl shadow-[#222]"
    v-for="(value, key) in pet"
    :key="index"
  >
    <p>{{ key }} &nbsp; : &nbsp; {{ value }}</p>
  </div>

  <h1 class="mt-20 text-white text-3xl">Object of Objects</h1>

  <div
    class="flex justify-between my-10 bg-[#222] p-5 rounded-md font-bold text-xl shadow-xl shadow-[#111]"
    v-for="{ id, title, author } in courses"
    :key="courses.id"
  >
    <span class="mx-5">{{ id }}</span>
    <span class="mx-5">{{ title }}</span>
    <span class="mx-5">{{ author }}</span>
  </div>

  <h1 class="mt-20 text-white text-3xl">v-if with v-for</h1>
  <h1 class="mt-10 text-white text-xl">
    don't use v-if with v-for, use v-if inside v-for
  </h1>
  <h1 class="text-white text-xl">
    Use Template, else empty div will be printed
  </h1>

  <template v-for="{ name, number } in contactList">
    <p
      class="flex justify-evenly my-10 bg-[#111] p-5 rounded-md font-bold text-xl shadow-xl shadow-[#222]"
      v-if="name === 'Clint'"
    >
      <span>{{ name }}</span>
      <span>{{ number }}</span>
    </p>
  </template>

  <vueButton v-for="button in buttons" :button="button"/>
</template>
