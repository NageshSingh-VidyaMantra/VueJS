<script setup>
import { ref } from "vue";
let favRobo = ref("Serpha");
let count = ref(999);
let mulBy2 = ref({ result: 1 }); // It will return Proxy
let worstRobo = ref({ wRobo: "cosac" }); // It will return Proxy
let favTitan = { titan: ref("Pacafic-Rim") };

let nestedObject = ref({
  bird: {
    birdA: "Parrot",
    birdB: "Crow",
    birdC: "Eagle",
  },
});

let pilotObj = ref({ pilotCount: ref(5) });
/*
console.log(pilotObj)
console.log(pilotObj.value)
console.log(pilotObj.value.pilotCount)
*/
/*
console.log(mulBy2); // proxy
console.log(favRobo);
console.log(worstRobo); // proxy
console.log(favTitan);
*/
function clickHandler() {
  console.log(favRobo);
  console.log(favRobo.value);
  return (favRobo.value = "MARS");
}

function changeTitanName() {
  console.log(favTitan.titan);
  console.log(favTitan.titan.value);
  return (favTitan.titan.value = "Titan-Slayer");
}

function decrement() {
  return --count.value;
}

function multiplyBy2() {
  return (mulBy2.value.result *= 2);
}
</script>

<template>
  <h1 class="text-4xl my-3 font-extrabold text-lime-400">ref</h1>
  <hr class="my-5" />
  <button
    @click="clickHandler()"
    class="my-2 text-center bg-lime-400 text-black font-bold p-2 rounded-lg border-2 border-lime-400 active:bg-transparent active:text-lime-400"
  >
    Change Fav Robo
  </button>
  <span class="ml-10 text-2xl my-3 font-bold text-white">{{ favRobo }}</span>

  <hr class="my-5" />
  <button
    @click="decrement()"
    class="my-2 text-center bg-lime-400 text-black font-bold p-2 rounded-lg border-2 border-lime-400 active:bg-transparent active:text-lime-400"
  >
    --Count
  </button>
  <span class="ml-10 text-2xl my-3 font-bold text-white"
    >COUNT : {{ count }}</span
  >
  <hr class="my-5" />
  <button
    @click="changeTitanName()"
    class="my-2 text-center bg-lime-400 text-black font-bold p-2 rounded-lg border-2 border-lime-400 active:bg-transparent active:text-lime-400"
  >
    Change Fav Titan
  </button>
  <span class="ml-10 text-2xl my-3 font-bold text-white">{{
    favTitan.titan.value
  }}</span>
  <hr class="my-5" />
  <p class="ml-10 text-2xl my-3 font-bold text-white">
    {{ worstRobo.wRobo }}
  </p>
  <hr class="my-5" />
  <button
    @click="multiplyBy2()"
    class="my-2 text-center bg-lime-400 text-black font-bold p-2 rounded-lg border-2 border-lime-400 active:bg-transparent active:text-lime-400"
  >
    Multiply By 2
  </button>
  <span class="ml-10 text-2xl my-3 font-bold text-white">{{
    mulBy2.result
  }}</span>
  <hr class="my-5" />
  <p class="ml-10 text-2xl my-3 font-bold text-white">
    {{ nestedObject.bird.birdA }}, {{ nestedObject.bird.birdB }},
    {{ nestedObject.bird.birdC }}
  </p>
  <hr class="my-5" />
  <p class="ml-10 text-2xl my-3 font-bold text-white">
    {{ pilotObj.pilotCount }}
  </p>
</template>
