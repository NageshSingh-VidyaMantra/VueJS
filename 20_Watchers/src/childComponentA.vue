<script setup>
import { ref, reactive, watch } from "vue";

const heartBeat = ref(85);
const oldHeartBeat = ref(null);
const newHeartBeat = ref(null);
const messageHB = ref(null);

// wathing single reactive element
watch(heartBeat, (newHB, oldHB) => {
  oldHeartBeat.value = oldHB;
  newHeartBeat.value = newHB;
  if (newHB > 120) messageHB.value = "Calm down . . . Take Deep Breath . . .";
  else if (newHB <= 5) messageHB.value = "Sorry you are dead . . .";
  else messageHB.value = "All Good . . .";
});

const bp = reactive({ bloodPressure: 100 });
const oldBloodPressure = ref(null);
const newBloodPressure = ref(null);
const messageBP = ref(null);

// wathing single reactive OBJECT

// When directly watching a reactive object, the watcher is automatically in deep mode.
// you can't access blood pressure by writing ** watch(bloodPressure, ()=>{ . . . })

// In case of getter function, it is manually required to enable deep mode
// Use getter function ** watch(bp.bloodPressure, ()=>{ . . . }),
// If we use getter function, newValue !== oldValue

// Pass whole Object   ** watch(bp, ()=>{ . . . })
// If we pass whole object, newValue === oldValue

/*
// 1st Way

watch(
  () => bp.bloodPressure, // getter function returning only bloodPressure
  (newBP, oldBP) => {
    console.log("new_BP : " + newBP);
    console.log("old_BP : " + oldBP);
    oldBloodPressure.value = oldBP;
    newBloodPressure.value = newBP;
    if (newBP > 120) messageBP.value = "Calm down . . . Take Deep Breath . . .";
    else if (newBP <= 80) messageBP.value = "Drink Coffee . . .";
    else messageBP.value = "All Good . . .";
  }
);
*/

// 2nd Way

watch(
  () => {
    return { ...bp };
  }, // getter function returning the object
  (newBP, oldBP) => {
    console.log("new_BP : " + newBP.bloodPressure);
    console.log("old_BP : " + oldBP.bloodPressure);
    oldBloodPressure.value = oldBP.bloodPressure;
    newBloodPressure.value = newBP.bloodPressure;
    if (newBP.bloodPressure > 120)
      messageBP.value = "Calm down . . . Take Deep Breath . . .";
    else if (newBP.bloodPressure <= 80) messageBP.value = "Drink Coffee . . .";
    else messageBP.value = "All Good . . .";
  }
);

const chemicalX = ref(66);
const chemicalY = ref(76);
const messageCC = ref(null);
const matchFoundCC = ref(false);

// only work when ChemicalX, ChemicalY values changes ..
watch([chemicalX, chemicalY], (newComposition) => {
  if(newComposition[0] === newComposition[1]) {
    messageCC.value = "Correct Composition";
    matchFoundCC.value = true;
  }
});

</script>

<template>
  <h1 class="my-5 text-2xl">&lt; Hello I am ChildA &gt;</h1>
  <div
    class="border-2 border-purple-300 my-10 shadow-lg shadow-[#111] p-5 bg-[#222] rounded-lg"
  >
    <h1 class="my-5 text-2xl text-center text-purple-300 font-bold">
      Using ref()
    </h1>
    <h1 class="my-5 text-2xl">Heart Rate Tracking System.</h1>
    <h1 class="my-5 text-2xl">Heart Rate/Min : {{ heartBeat }}</h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="oldHeartBeat">
      Old Heart-Beat : {{ oldHeartBeat }}
    </h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="newHeartBeat">
      New Heart-Beat : {{ newHeartBeat }}
    </h1>
    <h1 class="my-5 text-2xl text-center">{{ messageHB }}</h1>

    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="heartBeat += 5"
    >
      + + Heart-Rate
    </button>
    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="heartBeat ? (heartBeat -= 5) : 0"
    >
      - - Heart-Rate
    </button>
  </div>

  <!--  
  <div
    class="border-2 border-purple-300 my-10 shadow-lg shadow-[#111] p-5 bg-[#222] rounded-lg"
  >
    <h1 class="my-5 text-2xl text-center text-purple-300 font-bold">
      Using reactive()
    </h1>
    <h1 class="my-5 text-2xl">Blood Pressure Tracking System.</h1>
    <h1 class="my-5 text-2xl">Blood Pressure : {{ bp.bloodPressure }}</h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="oldBloodPressure">
      Old Blood-Pressure : {{ oldBloodPressure }}
    </h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="newBloodPressure">
      New Blood-Pressure : {{ newBloodPressure }}
    </h1>
    <h1 class="my-5 text-2xl text-center">{{ messageBP }}</h1>

    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="bp.bloodPressure += 5"
    >
      + + Blood Pressure
    </button>
    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="bp.bloodPressure -= 5"
    >
      - - Blood Pressure
    </button>
  </div>

  -->

  <div
    class="border-2 border-purple-300 my-10 shadow-lg shadow-[#111] p-5 bg-[#222] rounded-lg"
  >
    <h1 class="my-5 text-2xl text-center text-purple-300 font-bold">
      Using reactive()
    </h1>
    <h1 class="my-5 text-2xl">Blood Pressure Tracking System.</h1>
    <h1 class="my-5 text-2xl">Blood Pressure : {{ bp.bloodPressure }}</h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="oldBloodPressure">
      Old Blood-Pressure : {{ oldBloodPressure }}
    </h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="newBloodPressure">
      New Blood-Pressure : {{ newBloodPressure }}
    </h1>
    <h1 class="my-5 text-2xl text-center">{{ messageBP }}</h1>

    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="bp.bloodPressure += 5"
    >
      + + Blood Pressure
    </button>
    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="bp.bloodPressure -= 5"
    >
      - - Blood Pressure
    </button>
  </div>

  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span>When directly
    watching a reactive object, the watcher is automatically in deep mode.
  </h1>
  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span>you can't
    access blood pressure by writing ** watch(bloodPressure, (newVal, oldVal)=>{
    . . . })
  </h1>
  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span>Use getter
    function ** watch(bp.bloodPressure, (newVal, oldVal)=>{ . . . }), If we use
    getter function, then newValue !== oldValue
  </h1>
  <h1 class="text-lg my-4">
    <span class="text-lg text-purple-300 font-bold pr-2">[]</span>Pass whole
    Object ** watch(bp, (newVal, oldVal)=>{ . . . }), If we pass whole object,
    then newValue === oldValue
  </h1>

  <div
    class="border-2 border-purple-300 my-10 shadow-lg shadow-[#111] p-5 bg-[#222] rounded-lg"
  >
    <h1 class="my-5 text-2xl text-center text-purple-300 font-bold">
      Using Array
    </h1>
    <h1 class="my-5 text-2xl">Chemical Composition</h1>
    <h1 class="my-5 text-2xl">ChemicalX : {{ chemicalX }}</h1>
    <h1 class="my-5 text-2xl">ChemicalY : {{ chemicalY }}</h1>
    <h1 class="my-5 text-2xl text-purple-300" v-if="messageCC">
      {{ messageCC }}
    </h1>

    <button
      class="block w-[200px] m-5 border-2 border-purple-300 p-3 rounded-lg bg-[#333] active:bg-[#222] text-purple-300 font-bold"
      @click="()=>{ 
        ++chemicalX;
        --chemicalY;
       }"
       v-show="!matchFoundCC"
    >
      Change Composition
    </button>
  </div>
</template>
