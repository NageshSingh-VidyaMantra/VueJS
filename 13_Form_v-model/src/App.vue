<script setup>
import { reactive, toRefs } from "vue";

const formData = reactive({
  fullName: "",
  userEmail: "",
  userPassword: "",
  userGender: "",
  includeSubscription: "",
  movies: [],
  location: "",
});

const locations = reactive([
  "Asia",
  "Australia",
  "North America",
  "South America",
  "Africa",
  "Europe",
  "Antartica",
]);
const {
  fullName,
  userEmail,
  userPassword,
  userGender,
  includeSubscription,
  movies,
  location,
} = toRefs(formData);

function onFormHandler() {
  console.log("Form Submitted");
  console.log(formData);
}
</script>

<template>
  <h1 class="text-lime-500 font-bold text-4xl my-10">
    Form : v-model ( Two way binding )
  </h1>
  <h1 class="text text-lg my-5">
    Generally used on inputs of different types, &lt; textarea &gt;, &lt;
    textField &gt;, &lt; select &gt; and so on ...
  </h1>
  <h1 class="text text-lg my-5">
    <span class="text-lime-400 text-2xl font-bold">|</span> Two-Way Binding :
    Any changes in script affect template, any changes made in template affects
    script
  </h1>

  <form
    @submit.prevent="onFormHandler"
    class="bg-[#222] p-5 rounded-2xl border-2 border-lime-400 my-20"
  >
    <p>{{ fullName }}</p>
    <div class="my-5 space-x-10">
      <label>User Name </label>
      <input
        v-model="fullName"
        type="text"
        id="name"
        placeholder="Username"
        class="text-[#333] rounded-md p-1 pl-5 focus:outline-none focus:bg-lime-200"
      />
    </div>
    <div class="my-5 space-x-10">
      <label>User Email </label>
      <input
        v-model="userEmail"
        type="email"
        id="email"
        placeholder="Useremail"
        class="text-[#333] rounded-md p-1 pl-5 focus:outline-none focus:bg-lime-200"
      />
    </div>
    <div class="my-5 space-x-10">
      <label>User Password </label>
      <input
        v-model="userPassword"
        type="password"
        id="password"
        placeholder="User Password"
        class="text-[#333] rounded-md p-1 pl-5 focus:outline-none focus:bg-lime-200"
      />
    </div>
    <div class="my-10 p-5 space-x-10 bg-[#111]">
      <p class="mb-5">Gender</p>
      <label for="male" class="cursor-pointer">Male</label>
      <input
        v-model="userGender"
        type="radio"
        id="male"
        value="Male"
        class="cursor-pointer"
      />

      <label for="female" class="cursor-pointer">Female</label>
      <input
        v-model="userGender"
        type="radio"
        id="female"
        value="Female"
        class="cursor-pointer"
      />
    </div>
    <div class="my-5 space-x-10">
      <label>Include Subscription ?</label>
      <input
        v-model="includeSubscription"
        type="checkbox"
        id="checkbox"
        true-value="yes, I want it ..."
        false-value="naah, I pass ..."
        class="rounded focus:text-lime-400"
      />
    </div>
    <div class="my-5 p-5 bg-[#111] rounded-lg">
      Include Movie Type
      <div class="mt-5 flex flex-row justify-evenly">
        <div class="space-x-5">
          <label>Comedy</label>
          <input
            v-model="movies"
            type="checkbox"
            id="checkbox1"
            value="Comedy"
            class="rounded focus:text-lime-400"
          />
        </div>

        <div class="space-x-5">
          <label>Horror</label>
          <input
            v-model="movies"
            type="checkbox"
            id="checkbox2"
            value="Horror"
            class="rounded focus:text-lime-400"
          />
        </div>

        <div class="space-x-5">
          <label>Sci-fi</label>
          <input
            v-model="movies"
            type="checkbox"
            id="checkbox3"
            value="Sci-fi"
            class="rounded focus:text-lime-400"
          />
        </div>
      </div>
    </div>
    <div class="space-x-10">
      <span>Select Your Location</span>
      <select v-model="location" class="bg-[#111] p-2">
        <option v-for="displayLocation of locations" :value="displayLocation">
          {{ displayLocation }}
        </option>
      </select>
    </div>
    <button type="submit" class="my-5 bg-lime-400 text-[#222] p-2 rounded-lg">
      Submit
    </button>
  </form>
</template>
