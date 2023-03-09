<script setup>
import { ref, reactive, watch, onBeforeUpdate, onUpdated } from "vue";

const apiData = ref(null);
watch(
  null,
  async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      console.log("Api Data received . . .");
      apiData.value = data.title;
    } catch (error) {
      console.log(error.message);
    }
  },
  { immediate: true }
);

const recordUpdated = ref(false);
const empRec = reactive({
  empName: "Gale",
  empAge: 32,
  empAddress: {
    sec: "A-12",
    city: "NewYork",
    country: "USA",
  },
  personalInfo: ["gale@gmail.com", "7895461230"],
});

function updateEmpRecord() {
  recordUpdated.value = !recordUpdated.value;
  empRec.empName = "Stu";
  empRec.empAddress.sec = "NY-12";
  empRec.personalInfo[0] = "stu@gmail.com";
}

/*
// If we directly pass the Object than new === old
// Deep effect are shown
watch(empRec, (newRec, oldRec) => {
  console.log(newRec);
  console.log(oldRec);
});
*/

/*
// If we pass the exact object key than new !== old
watch(
  () => empRec.empAddress.sec,
  (newRec, oldRec) => {
    console.log('watcher is triggered . . .')
    console.log(newRec);
    console.log(oldRec);
  }
);
*/

/*
// If we provide the name of object like below,
// Than watch will not track anything
// manually tell it to track it {deep: true}
// new === old
watch(
  () => empRec,
  (newRec, oldRec) => {
    console.log("watcher is triggered . . .");
    console.log(newRec);
    console.log(oldRec);
  },
  { deep: true }
);
*/

/*
// non-nested new !== old
// object and array data is modified for both new and old, new === old for Obj and Array
watch(
  () => {return {...empRec}},
  (newRec, oldRec) => {
    console.log('watcher is triggered . . .')
    console.log(newRec);
    console.log(oldRec);
  }
);
*/

//flush

watch(
  () => empRec,
  () => {
    console.log("watcher is triggered . . .");
  },
  {
    deep: true,
    flush: "post",
  }
);

onBeforeUpdate(() => {
  console.log("On Before Update");
});

onUpdated(() => {
  console.log("On Updated");
});
</script>

<template>
  <div
    class="mb-10 bg-purple-300 text-black p-5 rounded-lg shadow-lg shadow-black font-bold"
  >
    <p>>> As soon as component render, Api is called.</p>
    <p class="my-5" v-if="apiData">
      <span>Fetched Data : </span><i>{{ apiData }}</i>
    </p>
  </div>

  <div
    class="my-5 space-y-2 p-5 rounded-lg text-black shadow-lg shadow-black font-bold"
    :class="[
      recordUpdated
        ? 'bg-[#222] text-purple-300 border-[1px] border-purple-300'
        : 'bg-purple-300',
    ]"
  >
    <p>{{ empRec.empName }}</p>
    <p>{{ empRec.empAge }}</p>
    <p>
      {{ empRec.empAddress.sec }}, {{ empRec.empAddress.city }},
      {{ empRec.empAddress.country }}
    </p>
    <p>{{ empRec.personalInfo[0] }}</p>
    <p>{{ empRec.personalInfo[1] }}</p>
  </div>

  <div class="text-center p-5 bg-[#222] my-4 rounded-xl">
    <button
      @click="updateEmpRecord"
      class="border-2 border-purple-300 bg-[#333] active:bg-[#222] text-purple-300 font-bold p-4 rounded-lg"
    >
      Update Employee Record
    </button>
  </div>

  <!--Flush  -->
  <!-- watch cb fun is called BEFORE, vuejs component update -->
  <!-- If you want cb fun to be called AFTER, vuejs component updated -->
  <div class="text-center p-5 bg-[#222] my-4 rounded-xl">
    <button
      @click="updateEmpRecord"
      class="border-2 border-purple-300 bg-[#333] active:bg-[#222] text-purple-300 font-bold p-4 rounded-lg"
    >
      Flush
    </button>
  </div>
</template>
