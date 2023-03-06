<script setup>
import { ref } from "vue";
const count = ref(0);
const mymessage = ref(null);
const event = ref(null);
const strMessage = ref(null);
const myName = ref(null);

function myMessage(message = "Hello") {
  return (mymessage.value = message);
}

function myEvent(e, str) {
  event.value = e.type;
  strMessage.value = str;
}

function saymyName(e) {
  return (myName.value = "Nagesh Singh Tomer");
}
</script>

<template>
  <h1 class="text-lime-400 text-3xl font-bold my-5">Inline Handles</h1>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span>by v-on</span>
    <span>{{ count }}</span>
    <button class="bg-lime-500 text-[#222] p-2 rounded-md" v-on:click="++count">
      ++Count
    </button>
  </div>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span>by @*event_name*</span>
    <span>{{ count }}</span>
    <button @click="--count" class="bg-lime-500 text-[#222] p-2 rounded-md">
      --Count
    </button>
  </div>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span>myMessage</span>
    <span>{{ mymessage }}</span>
    <button
      @click="myMessage('Good Morning')"
      class="bg-lime-500 text-[#222] p-2 rounded-md"
    >
      My Message
    </button>
  </div>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span>Event Type</span>
    <span>{{ event }}</span>
    <button
      @click="myEvent($event)"
      class="bg-lime-500 text-[#222] p-2 rounded-md"
    >
      Tell Me
    </button>
  </div>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span class="w-52">Event Type With Message</span>
    <span>{{ event }} {{ strMessage }}</span>
    <button
      @click="myEvent($event, 'My Message : Qwerty')"
      class="bg-lime-500 text-[#222] p-2 rounded-md"
    >
      Tell Me
    </button>
  </div>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span class="w-52">Arrow Function</span>
    <span>{{ count }}</span>
    <button
      @click="
        () => {
          ++count;
        }
      "
      class="bg-lime-500 text-[#222] p-2 rounded-md"
    >
      ++Count
    </button>
  </div>

  <h1 class="text-lime-400 text-3xl font-bold mt-32">Method Handles</h1>
  <p class="my-5 text-lg">Only write function name, No '( )' required</p>

  <div
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span class="w-52">@click="saymyName"</span>
    <span>{{ myName }}</span>
    <button @click="saymyName" class="bg-lime-500 text-[#222] p-2 rounded-md">
      Tell Me
    </button>
  </div>

  <h1 class="text-lime-400 text-3xl font-bold mt-32">Event Modifiers</h1>

  <form
    @submit=""
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span> @submit="Page Get Reload " </span>
    <span> {{ count }} </span>
    <button type="submit" class="bg-lime-500 text-[#222] p-2 rounded-md">
      submit
    </button>
  </form>

  <form
    @submit.prevent=""
    class="flex justify-between bg-[#222] my-5 p-5 text-2xl rounded-lg shadow-sm shadow-lime-500"
  >
    <span> @submit.prevent=" Prevent Page Reload " </span>
    <span> {{ count }} </span>
    <button type="submit" class="bg-lime-500 text-[#222] p-2 rounded-md">
      submit
    </button>
  </form>

  <h1 class="text-lime-400 text-3xl font-bold mt-32">Key Modifiers</h1>

</template>