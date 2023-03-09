<script setup>
import ChildA from "./childComponentA.vue";
import { ref, provide, readonly, inject } from "vue";
// now we can inject it anywhere
provide("empName", "Gale");
provide("petName", {
  petName: "Scobby",
  petAge: 12,
});
const reactiveData = ref("Loading . . .");
provide("reactiveData", reactiveData);
setTimeout(() => {
  reactiveData.value = "qwe987asd654";
}, 5000);

const readonlyData = ref("ZXC1001");
provide("readonlyData", readonly(readonlyData));
setTimeout(() => {
  readonlyData.value = "CXZ0110";
}, 5000);

const count = ref(0);
function incCount() {
  if (count.value < 3) return ++count.value;
}
provide("incCountByOne", incCount);
let messageProvidedByChild = inject("childMessage", "No Message Received !!");
console.log(messageProvidedByChild)
</script>

<template>
  <p
    class="text-center text-White text-4xl mt-10 text-yellow-400 font-extrabold"
  >
    Provide And Inject
  </p>
  <hr class="w-full my-5" />
  <p class="bg-yellow-400 p-5 rounded-lg shadow-md shadow-black text-black font-bold">Provide / inject are used together to allow an ancestor component to serve as a dependency injector for all its descendants, regardless of how deep the component hierarchy is, as long as they are in the same parent chain.</p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> Just to avoid
    prop drilling
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> Pass data
    through the component tree without having to pass props down manually at
    every level.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> Provide() -
    This function is used to provide data to a acomponent's descendants
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> A single
    components can call provide() multiple times with different injection keys
    to provide different values.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> The provide()
    function accepts two arguments
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> The first
    argument is called the
    <span class="bg-yellow-400 text-[#222] p-1">injection key</span> ,which can
    be a <span class="bg-yellow-400 text-[#222] p-1">string</span> or a
    <span class="bg-yellow-400 text-[#222] p-1">Symbol.</span>
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> The second
    argument is called the
    <span class="bg-yellow-400 text-[#222] p-1">provided value</span> . The
    value can be any
    <span class="bg-yellow-400 text-[#222] p-1"
      >type, including reactive state such as refs.</span
    >
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> The injection
    key is used by desendent components to lookup the desired value to inject.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> inject() -
    This function is used to inject data provided by an ancestor components.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> If the
    provided value is a <span class="bg-yellow-400 text-[#222] p-1">ref</span>,
    it will be injected as-in and will not be automatically unwrapped.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> If the
    default value is a
    <span class="bg-yellow-400 text-[#222] p-1">function</span>, then
    <span class="bg-yellow-400 text-[#222] p-1">false</span>
    must be passed as the third argument, that indicate the function should be
    used as the value instead of the factory
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> Syntax :-
    <span class="bg-yellow-400 text-[#222] p-1"
      >inject(injection_key, default_value_or_factory_function)</span
    >, it will be injected as-in and will not be automatically unwrapped.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> The second
    argument is <span class="bg-yellow-400 text-[#222] p-1">optional</span> and
    is the default value to be used when no matching value was found.
  </p>
  <div class="w-full flex flex-col items-center my-10">
    <p
      class="bg-yellow-400 my-5 p-5 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
    >
      Parent Component
    </p>
    <p class="text-center w-96 text-yellow-400 font-bold animate-bounce">⬇️</p>
    <p
      class="bg-yellow-400 my-5 p-5 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
    >
      A
    </p>
    <p class="text-center w-96 text-yellow-400 font-bold animate-bounce">⬇️</p>
    <p
      class="bg-yellow-400 my-5 p-5 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
    >
      B
    </p>
    <p class="text-center w-96 text-yellow-400 font-bold animate-bounce">⬇️</p>
    <p
      class="bg-yellow-400 my-5 p-5 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
    >
      C
    </p>
    <p class="text-center w-96 text-yellow-400 font-bold animate-bounce">⬇️</p>
    <p
      class="bg-yellow-400 my-5 p-5 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
    >
      D
    </p>
  </div>

  <p>I am a Parent Component.</p>
  <p
    class="bg-yellow-400 mb-5 p-5 w-[#200] text-center text-black font-bold rounded-lg shadow-lg shadow-[#111] animate-pulse"
  >
    Sending Code to Child : {{ reactiveData }}
  </p>
  <p
    class="bg-yellow-400 mb-5 p-5 w-[#200] text-center text-black font-bold rounded-lg shadow-lg shadow-[#111] animate-pulse"
  >
    Sending READONLY code to Child : {{ readonlyData }}
  </p>

  <ChildA />

  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> When we need
    to update the data from an injector component. In such cases, recommend
    providing function that is responsible for mutating the state.
  </p>
  <p class="my-3 text-lg">
    <span class="pr-5 text-xl text-yellow-400 font-bold">[]</span> Parent
    component can also provide a function to mutate the value of provided
    content.
  </p>
  <p class="mt-10 text-yellow-400 text-2xl">I am a Parent Component.</p>
  <div
    class="flex flex-row justify-around items-center bg-yellow-400 p-5 mb-2 w-96 text-center text-black font-bold rounded-lg shadow-lg shadow-[#111]"
  >
    <button
      @click="incCount"
      class="bg-[#333] text-yellow-400 p-2 rounded-lg active:bg-black"
    >
      ++Count
    </button>
    <p class="text-xl">{{ count }}</p>
  </div>
  <p>
    <i
      >**Here we have provided a function to Child to mutate value of count,
      Advantage of passing function here parent have control over the mutation.
      As you can see we cannot inc the value of count after
      <span class="text-yellow-400 font-bold">' 3 '</span>.</i
    >
  </p>

  <p class="mt-20 mb-3 bg-[#111] p-5 rounded-md border-2 border-yellow-400"> Message Provided By Child : {{ messageProvidedByChild }}</p>
  <p>
    <i
      >****Here child is trying to send data back to parent using his own<span class="text-yellow-400 font-bold"> 'provide'</span> but parent can't access as it can only be accessed by <span class="text-yellow-400 font-bold">descendants</span> of child</i
    >
  </p>
</template>
